# DEVLOG

Educational notes to self.

* PASSING PROPS: objects passed as props to component functions need to be destructured. I was first accepting as simple variables the received objects into the function argument, assuming that they would seperate accordingly, but this was wrong as only the first variable is populated with the objects (contained therein) and the second is empty.
    - This also sheds light on an earlier puzzle where I was passing a single object straight into the function as a variable which caused TypeErrors, but when destructured it would work.
    - WRONG:
    ``` 
    component function (contacts, addContact) {}
    ```

    - CORRECT:
    ``` 
    component function (props) {
        const { contacts, addContanct } = props;
    }
    ```
* React doesn't like it when useEffect has to call functions from the outside. 
    - The error received was: "The 'checkForDuplicateName' function makes the dependencies of useEffect Hook (at line 76) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'checkForDuplicateName' in its own useCallback()". 
    - Fixed it by moving the function definition into the useEffect and also adding contacts as parts of the dependency (I suspect this might have also have been relevant in the warnings above.)