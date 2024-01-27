import { Types } from "mongoose";
import Actor from "../../model/Actor";

export default async function castToCastRef(casts: string[]) {
  const actorRefs: Types.ObjectId[] = [];
  await Promise.all(
    casts.map(async (cast) => {
      let docRef;
      const nameRefExp = new RegExp(cast, "i");
      const currentCastId = await Actor.findOne({ name: nameRefExp })
        .select("_id")
        .exec();
      console.log(currentCastId);
      if (currentCastId) docRef = currentCastId._id;
      else {
        const newActor = await new Actor({ name: cast }).save();
        const newActorId = newActor._id;
        docRef = newActorId;
      }
      actorRefs.push(docRef);
    })
  );
  console.log(actorRefs);
  return actorRefs;
}
