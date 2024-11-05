const NameList = ({nameList}) => {
  return (
    <div className="nameList">
      {nameList.map((name, index) => {
        return (
          index % 2 === 0 ? <div key={name}><b>{name}</b></div> : <div key={name}><i>{name}</i></div>
        )
      })}
    </div>
  )
}

export default NameList;