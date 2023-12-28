'use client'

import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'
import { Tag } from '@/types/recipes'
import FilterTag from './FilterTag'

const BlogFilters = ({ tags }: { tags: Array<Tag> }) => {
  const [filters, setFilters] = useState<string[]>([])

  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  })

  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      const newFilters = filters.filter((item) => item !== filter)
      setFilters(newFilters)
      return
    }

    setFilters((prev) => [...prev, filter])
  }

  if (!tags.length) return

  return (
    <div className="overflow-x-hidden" ref={emblaRef}>
      <div className="flex items-center gap-2 py-2 pl-2">
        {tags.map((filter, i) => (
          <FilterTag
            key={filter._id}
            isActive={filters.includes(filter._id)}
            onClick={() => toggleFilter(filter._id)}
            className={clsx({ 'mr-2': i === tags.length - 1 })}
          >
            {filter.label}
          </FilterTag>
        ))}
      </div>
    </div>
  )
}

export default BlogFilters
