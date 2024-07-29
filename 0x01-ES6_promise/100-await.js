import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  // Create an object to store results
  const result = {
    photo: null,
    user: null
  };

  try {
    // Await results from both functions
    result.photo = await uploadPhoto();
  } catch {
    // If uploadPhoto fails, result.photo remains null
  }

  try {
    result.user = await createUser();
  } catch {
    // If createUser fails, result.user remains null
  }

  // Return the result object containing both responses or nulls
  return result;
}
