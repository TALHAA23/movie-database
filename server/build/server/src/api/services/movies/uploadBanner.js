import { getDownloadURL, uploadString, ref as reference, } from "@firebase/storage";
import { storage } from "../../../firebase/firebase";
const isDataURLValid = (url) => /^data:.+\/(.+);base64,(.*)$/.test(url);
export default async function uploadBanner(fileName, url) {
    if (!isDataURLValid(url))
        throw new Error("Invalid Data URL Encoded");
    const fileRef = reference(storage, `banners/${fileName}`);
    const upload = await uploadString(fileRef, url, "data_url");
    const ref = upload.ref;
    const downloadURL = getDownloadURL(ref);
    return downloadURL;
}
