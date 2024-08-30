'use client'

import {projectList} from '@/app/projects/page'
import { zuStore } from '@/store/zuStore'

export default function Filters() {
    const activeFilter = zuStore((state) => state.activeFilter);
    const updateActiveFilter = zuStore((state) => state.updateActiveFilter);
    const filtersList = zuStore((state) => state.filtersList);
    const updateFiltersList = zuStore((state) => state.updateFiltersList);

	const handleSelect = (id: string ) => {
        updateActiveFilter(id)
	}

	const filtersText = Array.from(new Set(projectList.map((x) => x.category)))
	
    // updateFiltersList(filtersText)

	return (
		<div className="py-6 flex items-center gap-3">
			{filtersList.map((item) => {
				return (
					<span
						className={`  ${
							activeFilter === item ? 'text-orange-yellow' : 'text-gray-300'
						} cursor-pointer`}
						onClick={() => handleSelect(item)}
						key={item}
					>
						{item}
					</span>
				)
			})}
		</div>
	)
}

// export const filteredList = projectList.filter((x) => x.category === selected)
