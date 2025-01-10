const formatDate = (date) => {
  return new Date(date).toTimeString
}

function Avatar(props) {
  return <img src={props.author.avatarURL} alt={props.author.name} />
}

const UserInfo = (props) => {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='comment-text'>{props.text}</div>
      <div className='comment-date'>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment
