import React from "react";

function ApprovedVillagers({ approvedVillagers, setApprovedVillagers }) {
  const removeVillager = (villager) => {
    setApprovedVillagers(
      approvedVillagers.filter((v) => v.name !== villager.name)
    );
    console.log(villager);
  };

  return (
    <div>
      {approvedVillagers.length !== 0 ? (
        approvedVillagers.map((rv) => {
          return (
            <div>
              <button onClick={() => removeVillager(rv)}>
                Remove Villager
              </button>
              <img
                className="villager-img"
                alt="amiibo card of villager"
                src={rv.image_url}
              />
            </div>
          );
        })
      ) : (
        <p>You haven't added any</p>
      )}
    </div>
  );
}

export default ApprovedVillagers;
