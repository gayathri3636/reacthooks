import React, {useState, useCallback} from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';
//usecallback hook is a hook that will return memoized version of the callback function that only
//changes if one of the dependencies has changed
//why?????????
//It is useful when passing callbacks to optimised child components that rely on reference 
//equality to prevent unecessary re-renders
function Parent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary]= useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
           <Title />
           <Count text="Age" count={age} />
           <Button handleClick={incrementAge}>Increment Age</Button> 
           <Count text="salary" count={salary} />
           <Button handleClick = {incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default Parent;
