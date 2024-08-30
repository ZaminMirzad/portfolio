import {create} from 'zustand'

interface storeState {
	user: any
	activeFilter: string
	filtersList: string[]
	updateActiveFilter: (filter: string) => void
	updateFiltersList: (list: string[]) => void
}

export const zuStore = create<storeState>((set) => ({
	user: null,
	activeFilter: 'All',
	filtersList: ['All'],
	updateActiveFilter: (filter: string) => set({activeFilter: filter}),
	updateFiltersList: (list) =>
		set((state) => ({...state, filtersList: state.filtersList.concat(list)})),
}))