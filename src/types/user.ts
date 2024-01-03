export type User = {
  _id: string
  email: string
  avatarUrl?: string
  displayName: string
  firebaseId: string
  preferences: Array<string>
  appliances: Array<{ label: string; imgSrc: string }>
  skill: {
    label: string
    imgSrc: string
  }
}
