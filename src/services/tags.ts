import { Tag } from '@/types/recipes'

export const getAllTags = async (): Promise<Array<Tag> | null> => {
  try {
    const tags = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tag`).then(
      (res) => res.json(),
    )

    return tags.data
  } catch (error) {
    console.log(error)
    return null
  }
}
