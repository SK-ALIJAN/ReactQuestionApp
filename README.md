## React-Online-Mock-Exam
![Screenshot (268)](https://github.com/SK-ALIJAN/ReactQuestionApp/assets/106768235/4022f12f-e040-4264-be74-e435c0e16daa)

## Folder Structure

```
├── src
|  ├── App.css
|  ├── App.jsx
|  ├── Components
|  |  ├── Booklet.jsx
|  |  ├── Option.jsx
|  |  └── QuestionCard.jsx
```

![Screenshot (269)](https://github.com/SK-ALIJAN/ReactQuestionApp/assets/106768235/8d3339c5-95d1-42e5-97e1-139f9d96df41)
![Screenshot (270)](https://github.com/SK-ALIJAN/ReactQuestionApp/assets/106768235/7d52d3ae-e463-473f-832f-cba96be953ff)

### App.jsx


This component will be responsible for rendering the `Booklet` component. The App component should import the `Booklet` component and include it inside a `<div>` element with a class name of "App".


### Booklet(Components/Booklet.jsx)

`Booklet` component in Booklet.jsx contains `div` with `data-testid="Booklet"`, Inside this `div`, create a div as below.

- **`div` should be with `className="welcome-div"`**
  - This should contain a welcome message in `h1` tag with textContent `To begin the exam, click on the 'Start Exam' button below`
  - There should also be a `button` with textContent `Start Exam`

## On Click of the `Start Exam` button

On clicking the `Start Exam` button, the application should make a GET request to the API and display all the questions in cards using the `QuestionCard` component.

The API request is made to the following URL:

## API LINK:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz

- Use Fetch only

- After getting the data
  - `div` with `className="welcome-div"` should not exist on `DOM`.
  - The div with `className="questions-container"` should also contain the following HTML elements
    - `h3` tag with textContent `Score: {score}`, the score by default will be `0`
    - button with textContent `End Exam` on Clicking it, we should see only `div` with `className="welcome-div"` existing on DOM and `div` with `className="questions-container"` should not exist on DOM. (We have ended the exam here, so when we again start the exam by clicking on `Start Exam`, the score should be 0, and the user should be able to answer the questions from the start)
    - The questions should be visible on the DOM with the help of the `QuestionCard` component. And all the `QuestionCard` components should be appended inside the `div` with `className="questions-container"` provided. The div with `className="questions-container"` is already provided to you in `Booklet.jsx`.

- Note:- This `div` with `className="questions-container"` should exist on DOM only when the user starts the exam(After clicking on `Start Exam` button). And it should not exist on DOM when the user stops the exam(After clicking on `End Exam` button).



# QuestionCard(Components/QuestionCard.jsx)

The `QuestionCard` component should contain the following HTML elements and should be used for displaying the `question` along with 4 options.
- create `h3` tag to display the question. (The textContent of this tag will be the question)
- `div` with `className="options"`.(provided in boilerplate)
  - All the options should be appended to the above div with the help of `Option` component.
- Create a div with `className="show-ans"`(provided in boilerplate)
  - This div should contain a button with textContent as `Show Ans` by default and on clicking it, the button textContent should be changed to `Hide Ans` and a `p` tag with textContent as correct ans of that question should exist on DOM. By default this `p` tag should not exist on DOM, it should be visible only when we click on the button `Show Ans` and on Clicking on the button(`Hide Ans`) again, the `p` tag should not exist on DOM.


**Functionality required**.

- The user should be able to click only one option per question. And on clicking it,
  - If he clicks on the `correct option` the score should be increased by `1` mark.
  - correct answer option for that question should have `className` as `bgGreen` and the wrong options should have className as `bgRed`.(<b style="color:green">This className should get assigned after selecting any option of that question. </b>)
  - Hint:- You can prevent the user from clicking on different options for a single question by using the disabled attribute for option buttons. For bgRed and bgGreen we gave css in App.css, so focus on how classNames can be assigned after selecting any option(Here options is a buttons).


# Option(Components/Option.jsx)

This component will be responsible for displaying the option. And there is a `div` with `data-testid="option"` provided in the boilerplate.

- You need to create a `button` with textContent as an option of that question.


