import React from 'react'
import SingleOverview from './SingleOverview'
import overviewListData from "./overviewListData"

export default function OverviewList() {
    return (
      <section className="overview-list">
        <h2
          className="overview-list__title"
        >
          Overview - Today
        </h2>
        {overviewListData.map((overview) => (
          <SingleOverview
            key={overview.id}
            name={overview.name}
            icon={overview.icon}
            count={overview.count}
            increase={overview.increase}
            percentage={overview.percentage}
          />
        ))}
      </section>
    );
}
