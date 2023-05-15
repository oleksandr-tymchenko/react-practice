export const Head = (props) => {

  console.log('props-', props)
  // деструктуризумо, це можна зробити і при отриманні аргументів
  const { clas, id } = props;
  return <p className={clas} id={id}>I am head </p>
}

