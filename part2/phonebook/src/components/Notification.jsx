const Notification = ({notif}) =>{
    if (notif.success === null){
      return null
    }
    return (
      <div className = { notif.success ? 'successnotif' :'errornotif' }>{notif.message}</div>
    )
}

export default Notification