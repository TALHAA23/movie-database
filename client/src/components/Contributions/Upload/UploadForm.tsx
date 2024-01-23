import "../../../../public/form.css";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import ScrollerInput from "./ScrollerInput";
import MiniAddButton from "./MiniAddButton";
import { validateData, validateFile } from "./validateData";
import { DataValidationInterface, Key } from "./DataInterface";
import validateAll from "./validateAll";
import upload from "./upload";

const DEBOUNCE_TIME = 200;
interface DataInterface {
  title: string;
  desc: string;
  cast: string[] | [];
  genre: string[] | [];
  banner?: File;
  awards?: string[] | [];
  releaseYear?: number;
  releaseDate?: Date;
  runTime?: number;
  tagline?: string;
  creator?: string;
  language?: string;
  countryOfOrigin?: string;
  [key: string]: any;
}

type StringOrArray = string[] | [];
interface GenreCastAwardsInterface {
  genre: StringOrArray;
  cast: StringOrArray;
  awards: StringOrArray;
  [key: string]: any;
}

export default function UploadForm() {
  const timeoutId = useRef<undefined | number>();
  const [genreCastAwards, setGenreCastAwards] =
    useState<GenreCastAwardsInterface>({
      genre: [],
      cast: [],
      awards: [],
    });

  const [error, setError] = useState<false | string>(false);
  const [absoluteError, setAbsoluteError] = useState<string | false>("");
  const [dataValidation, setDataValidation] = useState<DataValidationInterface>(
    {
      isTitleValid: false,
      isDescValid: false,
      isCastValid: false,
      isGenreValid: false,
      isReleaseYearValid: true,
      isReleaseDateValid: true,
      isRunTimeValid: false,
      isBannerValid: false,
    }
  );

  useEffect(() => {
    console.log(dataValidation);
    setAbsoluteError(validateAll(dataValidation));
  }, [dataValidation]);

  function updateData(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      const { name, value } = event.target;
      const keyForValidation = `is${name[0]
        .toUpperCase()
        .concat(name.slice(1))}Valid`;

      const valueForValidation = validateData(keyForValidation as Key, value);

      setDataValidation((prevValidation) => ({
        ...prevValidation,
        [keyForValidation]: valueForValidation,
      }));

      setError(
        typeof valueForValidation == "boolean" ? false : valueForValidation
      );
    }, DEBOUNCE_TIME);
  }

  function validateBanner(event: ChangeEvent<HTMLInputElement>) {
    const validation = validateFile(event);
    console.log(validation);

    setError(typeof validation == "boolean" ? false : validation);
    setDataValidation((prevData) => ({
      ...prevData,
      isBannerValid: typeof validation == "string" ? false : true,
    }));
  }

  function validateGenreCastAwards(key: string) {
    const error =
      genreCastAwards[key].length < 3 ? `Add atleast 3 ${key}s` : false;
    setError(error);
  }

  function addGenreCastAwards(key: string, newGenre: string) {
    if (!(key in genreCastAwards)) throw new Error("Invalid Key");
    if (!newGenre || genreCastAwards[key].includes(newGenre)) return;
    const keyForValidation = `is${key[0]
      .toUpperCase()
      .concat(key.slice(1))}Valid`;
    setGenreCastAwards((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], newGenre],
    }));
    setDataValidation((prevValidation) => ({
      ...prevValidation,
      [keyForValidation]: genreCastAwards[key].length > 3,
    }));
    validateGenreCastAwards(key);
  }

  function removeGenreCastAwards(key: string, valueToRemove: string) {
    if (!(key in genreCastAwards)) throw new Error("Invalid Key");
    setGenreCastAwards((prevState) => {
      const newArray = prevState[key].filter(
        (item: string) => item !== valueToRemove
      );
      return { ...prevState, [key]: newArray };
    });
    validateGenreCastAwards(key);
  }

  return (
    <form onSubmit={upload} className="contribution-new-form grid grid-cols-6">
      <h1 className=" col-span-full text-center font-semibold text-gray-600 text-2xl">
        Upload New Movie
      </h1>
      {error && <small className="col-span-full text-center">{error}</small>}
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
            onChange={updateData}
            type={name == "releaseYear" ? "number" : "date"}
            min={1990}
            max={new Date().getFullYear()}
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
            onChange={updateData}
            type={name == "runTime" ? "number" : "text"}
            min={0}
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
            genre
          </option>
          <option value="action" className=" input">
            action
          </option>
          <option value="action1">action1</option>
          <option value="action2">action2</option>
        </select>
        <MiniAddButton stateUpdater={addGenreCastAwards} />
      </label>

      <label className="col-span-3">
        <input placeholder="" name="cast" className="peer input" />
        <span>cast</span>
        <MiniAddButton stateUpdater={addGenreCastAwards} />
      </label>

      {[genreCastAwards.genre, genreCastAwards.cast].map(
        (values, index) =>
          values.length > 0 && (
            <ScrollerInput
              values={values}
              stateUpdater={removeGenreCastAwards}
              scrollerFor={index == 0 ? "genre" : "cast"}
            />
          )
      )}

      <label className="col-span-full">
        <select name="awards" id="awards" className="input peer">
          <option value="" selected disabled hidden>
            awards
          </option>
          <option value="action" className=" input">
            action
          </option>
          <option value="action2">action2</option>
          <option value="action3">action3</option>
        </select>
        <MiniAddButton stateUpdater={addGenreCastAwards} />
      </label>
      {genreCastAwards.awards && genreCastAwards?.awards?.length > 0 && (
        <ScrollerInput
          values={genreCastAwards.awards}
          stateUpdater={removeGenreCastAwards}
          scrollerFor="awards"
        />
      )}

      <label className="col-span-full">
        <input
          onChange={validateBanner}
          placeholder=""
          type="file"
          name="file"
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
        // disabled={!Object.values(dataValidation).every((el) => el == true)}
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
