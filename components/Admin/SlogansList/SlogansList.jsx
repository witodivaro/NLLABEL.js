import React from "react";
import Slogan from "../Slogan/Slogan";

const SlogansList = ({
  isAddingSlogan,
  slogans,
  onSave,
  onDelete,
  className,
}) => {
  return (
    <div className={className}>
      {isAddingSlogan && (
        <Slogan key="new" slogan={{}} onSave={onSave} onDelete={onDelete} />
      )}
      {slogans.map((slogan) => (
        <Slogan
          key={slogan._id}
          slogan={slogan}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SlogansList;
