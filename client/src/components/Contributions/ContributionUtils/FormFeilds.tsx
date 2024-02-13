import awardsList from "../../../utils/awardsList";
import genresList from "../../../utils/genresList";
import { validateFile } from "../Upload/validateData";

const FormFeilds = [
  {
    feildName: "title",
    element: () => (
      <label className="col-span-full">
        <input type="text" name="title" className="input" />
        <span>title</span>
      </label>
    ),
  },
  {
    feildName: "desc",
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
    feildName: "cast",
    element: () => (
      <label className="col-span-3">
        <input placeholder="" name="cast" className="peer input" />
        <span>casts seperated by comma</span>
      </label>
    ),
  },
  {
    feildName: "genre",
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
    feildName: "banner",
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
    feildName: "awards",
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
    feildName: "releaseYear",
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
    feildName: "releaseDate",
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
    feildName: "runTime",
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
    feildName: "tagline",
    element: () => (
      <label className="col-span-2 text-xs">
        <input type="text" max={100} className="input" name="tagline" />
        <span>tagLine</span>
      </label>
    ),
  },
  {
    feildName: "creator",
    element: () => (
      <label className="col-span-2 text-xs">
        <input type="string" max={50} className="input" name="creator" />
        <span>creator</span>
      </label>
    ),
  },
  {
    feildName: "language",
    element: () => (
      <label className="col-span-3">
        <input type="text" className="input" name="language" />
        <span>language</span>
      </label>
    ),
  },
  {
    feildName: "countryOfOrigin",
    element: () => (
      <label className="col-span-3">
        <input type="text" className="input" name="countryOfOrigin" />
        <span>countryOfOrigin</span>
      </label>
    ),
  },
];
export default FormFeilds;
