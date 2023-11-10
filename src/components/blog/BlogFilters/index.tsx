'use client'

import { useState } from 'react'
import FilterTag from './FilterTag'
import { blogFilters } from '@/constants/blog'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'

const BlogFilters = () => {
  const [filters, setFilters] = useState<string[]>(['lunch'])

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

  return (
    <div className="overflow-x-hidden" ref={emblaRef}>
      <div className="flex items-center gap-2 py-2 pl-2">
        {blogFilters.map((filter, i) => (
          <FilterTag
            key={filter}
            isActive={filters.includes(filter)}
            onClick={() => toggleFilter(filter)}
            className={clsx({ 'mr-2': i === blogFilters.length - 1 })}
          >
            {filter}
          </FilterTag>
        ))}
      </div>
    </div>
  )
}

export default BlogFilters
