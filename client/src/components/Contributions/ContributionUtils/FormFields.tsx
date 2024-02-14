import awardsList from "../../../utils/awardsList";
import genresList from "../../../utils/genresList";
import { validateFile } from "../Upload/validateData";

const FormFields = [
  {
    fieldName: "title",
    element: () => (
      <label className="col-span-full">
        <input type="text" name="title" className="input" />
        <span>title</span>
      </label>
    ),
  },
  {
    fieldName: "desc",
    element: () => (
      <label className=" col-span-full">
        <textarea
          maxLength={350}
          className="input resize-none "
          name="desc"
        ></textarea>
        <span className="">description</span>
      </label>
    ),
  },
  {
    fieldName: "cast",
    element: () => (
      <label className="col-span-3">
        <input placeholder="" name="cast" className="peer input" />
        <span>casts seperated by comma</span>
      </label>
    ),
  },
  {
    fieldName: "genre",
    element: () => (
      <label className="relative col-span-3">
        <select name="genre" id="genre" className="input peer">
          <option value="" selected disabled hidden>
            Select Genre
          </option>
          {genresList.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </label>
    ),
  },
  {
    fieldName: "banner",
    element: () => (
      <label className="col-span-full">
        <input
          onChange={(event) => {
            const isFileValid = typeof validateFile(event) == "boolean";
            if (!isFileValid) alert("File size should be less then 3Mb");
          }}
          type="file"
          name="banner"
          className={`input text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
         file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700
       hover:file:bg-yellow-100 after:content-['_(banner)'] after:text-xs`}
        />
      </label>
    ),
  },
  {
    fieldName: "awards",
    element: () => (
      <label className=" relative col-span-full">
        <select name="awards" id="awards" className="input peer">
          <option value="" selected disabled hidden>
            Select Awards
          </option>
          {awardsList.map((award) => (
            <option value={award}>{award}</option>
          ))}
        </select>
      </label>
    ),
  },
  {
    fieldName: "releaseYear",
    element: () => (
      <label className="col-span-3">
        <input
          type="number"
          min={1990}
          max={new Date().getFullYear() + 20}
          placeholder=""
          name="releaseYear"
          className="peer input"
        />
        <span>releaseYear</span>
      </label>
    ),
  },
  {
    fieldName: "releaseDate",
    element: () => (
      <label className="col-span-3">
        <input
          type="date"
          min={1990}
          max={new Date().getFullYear() + 20}
          placeholder=""
          name="releaseDate"
          className="peer input"
        />
        <span>releaseDate</span>
      </label>
    ),
  },
  {
    fieldName: "runTime",
    element: () => (
      <label className="col-span-2 text-xs">
        <input
          type="number"
          min={10}
          max={200}
          className="input"
          name="runTime"
        />
        <span className=" after:content-['__(in_min)']">runTime</span>
      </label>
    ),
  },
  {
    fieldName: "tagline",
    element: () => (
      <label className="col-span-2 text-xs">
        <input type="text" max={100} className="input" name="tagline" />
        <span>tagLine</span>
      </label>
    ),
  },
  {
    fieldName: "creator",
    element: () => (
      <label className="col-span-2 text-xs">
        <input type="string" max={50} className="input" name="creator" />
        <span>creator</span>
      </label>
    ),
  },
  {
    fieldName: "language",
    element: () => (
      <label className="col-span-3">
        <input type="text" className="input" name="language" />
        <span>language</span>
      </label>
    ),
  },
  {
    fieldName: "countryOfOrigin",
    element: () => (
      <label className="col-span-3">
        <input type="text" className="input" name="countryOfOrigin" />
        <span>countryOfOrigin</span>
      </label>
    ),
  },
  // for actor
  {
    fieldName: "name",
    element: () => (
      <label className="col-span-full">
        <input type="text" name="name" className="input" />
        <span>name</span>
      </label>
    ),
  },
  {
    fieldName: "about",
    element: () => (
      <label className=" col-span-full">
        <textarea
          maxLength={350}
          placeholder=""
          className="input resize-none "
          name="about"
        ></textarea>
        <span className="">about</span>
      </label>
    ),
  },
  {
    fieldName: "DOB",
    element: () => (
      <label className="col-span-3">
        <input
          type="date"
          max={new Date().getFullYear()}
          placeholder=""
          name="DOB"
          className="peer input"
        />
        <span>Date of birth</span>
      </label>
    ),
  },
  {
    fieldName: "achievments",
    element: () => (
      <label className=" relative col-span-full">
        <select name="achievments" id="achievments" className="input peer">
          <option value="" selected disabled hidden>
            Achievments
          </option>
          {awardsList.map((award) => (
            <option value={award}>{award}</option>
          ))}
        </select>
      </label>
    ),
  },
  {
    fieldName: "knownFor",
    element: () => (
      <label className="col-span-3">
        <input placeholder="" name="knownFor" className="peer input" />
        <span>Movies Title for which the actor is know seperated by comma</span>
      </label>
    ),
  },
  {
    fieldName: "previousMovies",
    element: () => (
      <label className="col-span-3">
        <input placeholder="" name="previousMovies" className="peer input" />
        <span>Movies that the actor has worked in know seperated by comma</span>
      </label>
    ),
  },
  {
    fieldName: "upcoming",
    element: () => (
      <label className="col-span-3">
        <input placeholder="" name="upcoming" className="peer input" />
        <span>Upcoming Movies Title seperated by comma</span>
      </label>
    ),
  },
];
export default FormFields;
