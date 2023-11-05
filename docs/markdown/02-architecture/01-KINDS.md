# Web architecture

When creating app, depending of the type of app and the size, you will need to adapt the architecture

It exist **4** main architecture:<br/><br/>

- View architecture<br/><br/>
- Atomic architecture<br/><br/>
- Island architecture<br/><br/>
- hexagonal architecture<br/><br/>

##==##

# View Architecture

Architecture by default for React and Vue, based on the different page that the application contains <br/><br/>

- **Pros**:
  - Easy to start
  - Easy to understand
  - Easy to test

<br/><br/>

- **Cons**:
  - Hard to scale
  - Hard to maintain


##==##

# Atomic Architecture

Architecture by default for Angular, based on the different feature that the application contains <br/><br/>

- **Pros**:
  - Easy to scale
  - Easy to maintain
  - Easy to test

<br/><br/>

- **Cons**:
  - medium to start
  - medium to understand

##==##

# Island Architecture

Architecture for server side rendering, based on the island part of interactivity. <br/><br/>


- **Pros**:
  - less javascript loaded initially
  - content prioritization
  - Core Web Vitals respected out of the box

<br/><br/>

- **Cons**:
  - not performant for application with a lot of interactivity
  - difficult to maintain
  - difficult to start
  - big learning curve

##==##

# Hexagonal Architecture

Architecture used by netflix, that separate the business logic and the technical layer

- **Pros**:
  - Easy to scale
  - Facilitates the introduction of changes
  - Each layer can be developed independently

<br/><br/>

- **Cons**:
  - difficult to start
  - difficult to maintain
  - big learning curve
