import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type AuthMetaData = {
  isAuthModalOpen: boolean
}

type PreferencesStepData = {
  preferences: string[]
}

type AppliancesStepData = {
  appliances: string[]
}

type SkillStepData = {
  skillLevel: string
}

type SetDataType =
  | { step: 'preferences'; data: PreferencesStepData }
  | { step: 'appliances'; data: AppliancesStepData }
  | { step: 'skillLevel'; data: SkillStepData }

type AuthStore = {
  meta: AuthMetaData
  setMeta: (data: AuthMetaData) => void
  preferences: PreferencesStepData
  appliances: AppliancesStepData
  skillLevel: SkillStepData
  setData: ({ step, data }: SetDataType) => void
}

const epmtyPreferencesStepData: PreferencesStepData = {
  preferences: [],
}

const epmtyAppliancesStepData: AppliancesStepData = {
  appliances: [],
}

const epmtySkillStepData: SkillStepData = {
  skillLevel: '',
}

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    meta: { isAuthModalOpen: false },
    setMeta: (data) =>
      set((state) => ({
        ...state,
        meta: {
          ...state.meta,
          ...data,
        },
      })),

    preferences: epmtyPreferencesStepData,
    appliances: epmtyAppliancesStepData,
    skillLevel: epmtySkillStepData,
    setData: ({ step, data }) =>
      set((state) => ({
        ...state,
        [step]: {
          ...state[step],
          ...data,
        },
      })),
  })),
)

export default useAuthStore
