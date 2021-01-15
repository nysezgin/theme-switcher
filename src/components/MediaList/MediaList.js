import React from 'react'
import SingleMedia from './SingleMedia'
import facebookIcon from "../images/icon-facebook.svg"
import twitterIcon from "../images/icon-twitter.svg"
import instagramIcon from "../images/icon-instagram.svg"
import youtubeIcon from "../images/icon-youtube.svg"

export default function MediaList({theme}) {
    return (
      <section className="media-list">
        <SingleMedia
          theme={theme}
          icon={facebookIcon}
          name={"@nathanf"}
          top={"media__facebook-top"}
          count={"1987"}
          type={"FOLLOWERS"}
          increase={true}
          today={"12"}
        />
        <SingleMedia
          theme={theme}
          icon={twitterIcon}
          name={"@nathanf"}
          top={"media__twitter-top"}
          count={"1044"}
          type={"FOLLOWERS"}
          increase={true}
          today={"99"}
        />
        <SingleMedia
          theme={theme}
          icon={instagramIcon}
          name={"@realnathanf"}
          top={"media__instagram-top"}
          count={"11k"}
          type={"FOLLOWERS"}
          increase={true}
          today={"1099"}
        />
        <SingleMedia
          theme={theme}
          icon={youtubeIcon}
          name={"Nathan F."}
          top={"media__youtube-top"}
          count={"8239"}
          type={"SUBSCRIBERS"}
          increase={false}
          today={"144"}
        />
      </section>
    );
}
