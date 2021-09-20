import { agent } from "./index"

export const userPaths = {
  uploadFile: (): string => `/upload`,
}
export const userService = {
  uploadFile: async (formData: FormData): Promise<null> => {
    try {
      return await agent.post(userPaths.uploadFile(), formData)
    } catch (err) {
      throw err
    }
  },
}
