import "../../../../public/form.css";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import ScrollerInput from "./ScrollerInput";
import MiniAddButton from "./MiniAddButton";
import { validateData, validateFile } from "./validateData";
import { DataValidationInterface, Key } from "./DataInterface";
import validateAll from "./validateAll";
import upload from "../../../api/services/newMovieFormSubmission";
import genresList from "../../../utils/genresList";
import awardsList from "../../../utils/awardsList";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useMessageUpdater } from "../../../Contexts/MessageProvider";

const DEBOUNCE_TIME = 200;
const MIN_GENRE_CAST_AWARDS = 3;

type StringOrArray = string[] | [];
interface GenreCastAwardsInterface {
  genre: StringOrArray;
  cast: StringOrArray;
  awards: StringOrArray;
  [key: string]: any;
}

const addIsValidtoKey = (key: string) =>
  `is${key[0].toUpperCase().concat(key.slice(1))}Valid`;

const initGenreCastAwards = () => ({
  genre: [],
  cast: [],
  awards: [],
});

const initDataValidation = (): DataValidationInterface => ({
  isTitleValid: false,
  isDescValid: false,
  isCastValid: false,
  isGenreValid: false,
  isReleaseYearValid: false,
  isRunTimeValid: false,
  isBannerValid: false,
});

export default function UploadForm() {
  const updateMessage = useMessageUpdater();
  const timeoutId = useRef<undefined | number>();
  const navigate = useNavigate();
  const [genreCastAwards, setGenreCastAwards] =
    useState<GenreCastAwardsInterface>(initGenreCastAwards());

  const [error, setError] = useState<false | string>(false);
  const [absoluteError, setAbsoluteError] = useState<string | false>("");
  const [dataValidation, setDataValidation] = useState<DataValidationInterface>(
    initDataValidation()
  );

  const uploadMutation = useMutation({
    mutationKey: ["new-movie"],
    mutationFn: upload,
  });

  if (uploadMutation.isPending) console.log("loading...");
  if (uploadMutation.isError) console.log(uploadMutation.error);
  if (uploadMutation.isSuccess) console.log(uploadMutation.data);

  useEffect(() => {
    setAbsoluteError(validateAll(dataValidation));
  }, [dataValidation]);

  useEffect(() => {
    if (!uploadMutation.isSuccess) return;
    updateMessage("Movie added successfully", "success");
    navigate("/");
  }, [uploadMutation.isSuccess]);

  function updateData(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      const { name, value } = event.target;
      const keyForValidation = addIsValidtoKey(name);
      const valueAfterValidation = validateData(keyForValidation as Key, value);
      setDataValidation((prevValidation) => ({
        ...prevValidation,
        [keyForValidation]: valueAfterValidation,
      }));
      setError(
        typeof valueAfterValidation == "boolean" ? false : valueAfterValidation
      );
    }, DEBOUNCE_TIME);
  }

  function validateBanner(event: ChangeEvent<HTMLInputElement>) {
    const validation = validateFile(event);
    setError(typeof validation == "boolean" ? false : validation);
    setDataValidation((prevData) => ({
      ...prevData,
      isBannerValid: typeof validation == "string" ? false : true,
    }));
  }

  function addOrRemoveGenreCastAwards(
    action: "add" | "remove",
    key: string,
    value: string
  ) {
    if (!(key in genreCastAwards)) throw new Error("Invalid Key");
    if (!value || (action == "add" && genreCastAwards[key].includes(value)))
      return;
    const keyForValidation = addIsValidtoKey(key);
    setGenreCastAwards((prevState) => {
      const updatedField =
        action == "add"
          ? [...prevState[key], value]
          : prevState[key].filter((item: string) => item !== value);
      const updatedState = {
        ...prevState,
        [key]: updatedField,
      };
      setDataValidation((prevValidation) => ({
        ...prevValidation,
        [keyForValidation]: updatedState[key].length >= MIN_GENRE_CAST_AWARDS,
      }));
      setError(
        updatedState[key].length < MIN_GENRE_CAST_AWARDS
          ? `Add atleast 3 ${key}`
          : false
      );
      return updatedState;
    });
  }

  return (
    <form
      onSubmit={uploadMutation.mutate}
      className="contribution-new-form grid grid-cols-6"
    >
      <h1 className=" col-span-full text-center font-semibold text-gray-600 text-2xl">
        Upload New Movie
      </h1>
      {(error || uploadMutation.isError || uploadMutation.isPending) && (
        <small className="col-span-full text-center">
          {uploadMutation.error?.message || error || "Uploading..."}
        </small>
      )}
      <label className="col-span-full">
        <input
          onChange={updateData}
          // required
          placeholder=""
          type="text"
          name="title"
          className="input"
        />
        <span>title</span>
      </label>

      {["releaseYear", "releaseDate"].map((name) => (
        <label className="col-span-3">
          <input
            // required={name == "releaseYear" ? true : false}
            onChange={updateData}
            type={name == "releaseYear" ? "number" : "date"}
            min={1990}
            max={new Date().getFullYear() + 20}
            placeholder=""
            name={name}
            className="peer input"
          />
          <span>
            {name
              .split(/(?=[A-Z])/)
              .join(" ")
              .toLowerCase()}
          </span>
        </label>
      ))}
      <label className=" col-span-full">
        <textarea
          onChange={updateData}
          maxLength={350}
          // required
          placeholder=""
          className="input resize-none "
          name="desc"
        ></textarea>
        <span className="">description</span>
      </label>

      {["runTime", "tagline", "creator"].map((name) => (
        <label className="col-span-2 text-xs">
          <input
            // required={name == "runTime" ? true : false}
            onChange={updateData}
            type={name == "runTime" ? "number" : "text"}
            min={10}
            max={200}
            placeholder=""
            className="input"
            name={name}
          />
          <span
            className={name == "runTime" ? " after:content-['__(in_min)']" : ""}
          >
            {name
              .split(/(?=[A-Z])/)
              .join(" ")
              .toLocaleLowerCase()}
          </span>
        </label>
      ))}
      {["countryOfOrigin", "language"].map((name) => (
        <label className="col-span-3">
          <input
            onChange={updateData}
            placeholder=""
            type="text"
            className="input"
            name={name}
          />
          <span>
            {name
              .split(/(?=[A-Z])/)
              .join(" ")
              .toLocaleLowerCase()}
          </span>
        </label>
      ))}

      <label className="relative col-span-3">
        <select name="genre" id="genre" className="input peer">
          <option value="" selected disabled hidden>
            Select Genre
          </option>
          {genresList.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
        <MiniAddButton stateUpdater={addOrRemoveGenreCastAwards} />
      </label>

      <label className="col-span-3">
        <input placeholder="" name="cast" className="peer input" />
        <span>cast</span>
        <MiniAddButton stateUpdater={addOrRemoveGenreCastAwards} />
      </label>

      {[genreCastAwards.genre, genreCastAwards.cast].map(
        (values, index) =>
          values.length > 0 && (
            <ScrollerInput
              values={values}
              stateUpdater={addOrRemoveGenreCastAwards}
              scrollerFor={index == 0 ? "genre" : "cast"}
            />
          )
      )}

      <label className="col-span-full">
        <select name="awards" id="awards" className="input peer">
          <option value="" selected disabled hidden>
            Select Awards
          </option>
          {awardsList.map((award) => (
            <option value={award}>{award}</option>
          ))}
        </select>
        <MiniAddButton stateUpdater={addOrRemoveGenreCastAwards} />
      </label>
      {genreCastAwards.awards && genreCastAwards?.awards?.length > 0 && (
        <ScrollerInput
          values={genreCastAwards.awards}
          stateUpdater={addOrRemoveGenreCastAwards}
          scrollerFor="awards"
        />
      )}

      <label className="col-span-full">
        <input
          onChange={validateBanner}
          placeholder=""
          type="file"
          name="banner"
          // required
          className={`input text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
         file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700
       hover:file:bg-yellow-100`}
        />
      </label>
      {Array.from(Object.entries(genreCastAwards)).map(([key, value]) => (
        <input type="text" name={key} value={JSON.stringify(value)} hidden />
      ))}
      <button
        type="submit"
        className="peer relative col-span-full fancy disabled:cursor-no-drop"
        disabled={!Object.values(dataValidation).every((el) => el == true)}
      >
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
        {absoluteError && (
          <p className=" absolute -top-5 -right-3   bg-black/70 rounded-full px-2 py-1">
            {absoluteError}
          </p>
        )}
      </button>
    </form>
  );
}
