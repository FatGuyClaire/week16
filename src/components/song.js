import React from "react";
import SongDelete from "./song-delete";
import SongEdit from "./song-edit";

// I created a table row to show data and pass the edit and remove functions along to child components
const Song = (props) => {
  const { title, artist } = props;
  return (
    <tr>
      <td> {artist} </td>
      <td> {title} </td>
      <td className="text-end">
        <SongEdit {...props} />
        <SongDelete {...props} />
      </td>
    </tr>
  );
};

export default Song;
