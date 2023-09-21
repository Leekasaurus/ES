import Categorize from './Categorize'

import React from 'react'

function Directory({categories}) {
  return (
    <div>
    {categories.map((category)=> (
    <category key={category.id} category={category} />
    ))},
    </div>
  )
}

export default Directory