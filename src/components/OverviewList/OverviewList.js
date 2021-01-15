import React from 'react'
import SingleOverview from './SingleOverview'
import overviewListData from "./overviewListData"

export default function OverviewList({theme}) {
    return (
      <section className="overview-list">
        <h2
          className={
            theme
              ? "overview-list__title"
              : "overview-list__title overview-list__title--dark"
          }
        >
          Overview - Today
        </h2>
        {overviewListData.map((overview) => (
          <SingleOverview
            key={overview.id}
            theme={theme}
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
