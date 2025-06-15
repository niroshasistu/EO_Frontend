const AboutUspage = ()=>{
    return (
        <div style={styles.container}>
            <h1 style={styles.title} >Hello I am abou us</h1>

        </div>
    )
}
export default AboutUspage;
const styles = {
  container:{
    display:'flex',
    justifyContent :'center',
  },
  title: {
    fontSize: '2.8rem',
    color: '#fff',
    marginBottom: '10px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  }
}