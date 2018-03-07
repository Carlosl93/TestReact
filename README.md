# TestReact

React project made as a entry test.

To initialize the project clone it -> git clone git@github.com:Carlosl93/TestReact.git

Build                              -> npm install or yarn build

Init the project                   -> npm run dev or yarn dev



# Architecture
It was build using react, redux, webpack, styled-components, material-ui, lodash and fontawesome.

React             -> Allows to work with the virtual-dom to make component based architecture of the dom.

Redux             -> Allows to manage states as inmutable objects.

Webpack           -> It allows to use jsx feature, babel, and work with different enviroment setups.

Styled-Components -> It's a library that uses css-based components on react, having all full-features of css combined with
                    React's component-based flow as passing props.
                    
Material-UI       -> Visual React Framework that has many components built following the design guidelines of google material
                    design.
                    
lodash            -> A set of javascript functions rewrited to have better performance than js api's.

fontawesome       -> A set of svg icons.

# Components

The app was divided on three main components, Head, Body and Footer. 

Head uses a textInput from material-ui and a button to add tasks, it validates if the field is empty and uses the TaskContainer
to receive as props the 'addTask' function. 

Body uses a filter component and a component that renders the tasksElement mapping through the tasks prop. It is contained by
the FilterContainer, the filter container pass as props the tasks variable that has an array of objects with each task that is 
mapped and rendered and has the filterTask function that sets the filter, the FilterContainer sets the tasks state based on the
current filter.

Each TaskElement is contained aswell by the TaskContainer, this function pass as props the deleteTask and toggleTask function
that toggle the 'complete' of the tasks or deletes the clicked task.

TaskContainer   -> Head -> TextField

                        -> Icon
                        
                -> TaskElement
              
FilterContainer -> Body -> Filter

                        -> TaskList -> TaskElement
