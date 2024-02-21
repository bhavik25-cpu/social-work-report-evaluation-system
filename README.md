Node.js Assessment with Decision Tree &amp; CRUD:

Remember:
1. Please perform this assessment on Netlify or any application similar to Netlify…
And share us the link to your assessment.
2. Kindly code in NODE js (Express js, MySQL)
3. And also please share with us the Github repo of the code. Perform 1-2 crud
operations and questions based on points.
4. Questions with tree decision have to be done mandatorily
5. No need to create a UI for the assessment for frontend design, please keep it as
simple as possible and focus on backend functionality.
Scenario: Develop a social work report evaluation system using a decision tree algorithm.
Tasks:
1. Data Model:
Define a simple data structure to represent a social work report, including fields like:
Category: (Education, Healthcare)
Points: (Initially set to 0)
Questions: (Type of questions to be displayed depending on the category selection)
2. Decision Tree Implementation:
Implement a basic decision tree algorithm in Node js, Express.
The decision tree should use the report&#39;s &quot;Category&quot; as the root node.
3. CRUD Operations:
Simulate CRUD operations for report data using a mock database or in-memory data
structure.
Create: Allow users to upload a new report with category selection.
Read: Retrieve existing reports for evaluation.
Update: Update report points based on question responses.
Delete: Delete Reports
4. Question-Based Point Allocation:
Define several questions relevant to each report category (e.g., for Education: number of
students served, resources provided).
Each question should have multiple choice options with assigned point values.
Upon user selection of an answer choice, update the report&#39;s &quot;Points&quot; based on the
corresponding value.

Education Category:
1. How many individuals directly benefited from this program? (Multiple Radio buttons
cannot be chosen)
Radio buttons Options 1 : 1-10(5 points)
Options 2: 10-50(10 points)
Options 3: Above 50 (15 points)
2. What was the average increase in literacy skills observed?
Radio buttons Options 1 : Below 25%(5 points)
Options 2: 25%-50%(10 points)
Options 3: Above 50% (15 points)

3. Did the program provide access to essential educational resources (e.g., learning
materials, technology)? (Yes: 2 points, No: 0 points)
Healthcare Category:
1. How many patients received medical care through this initiative?
Radio buttons Options 1 : 1-10(5 points)
Options 2: 10-50(10 points)
Options 3: Above 50 (15 points)

2. What was the percentage reduction in reported health issues within the target
community? (0-10 points)
Radio buttons Options 1 : 1-10(5 points)
Options 2: 10-50(10 points)
Options 3: Above 50 (15 points)

3. Did the program provide access to preventative healthcare services (e.g., vaccinations,
screenings)? (Yes: 3 points, No: 0 points)
3.i. If yes is clicked display a field text for typing with the below question
Question: What was the service?
Text Input field
Note: For reference on how to do this algorithm please try and upload impact report on
qsimpact.orgn impact report tab.
_____________________________________________________________________________________________________
apis
1 post 
```javascript

http://localhost:3000/reports
```

JSON
Body
```javascript

{
  "category": "Education",
  "points": 0,
  "questions": [
    {
      "question": "How many individuals directly benefited from this program?",
      "options": [
        { "label": "1-10", "points": 5 },
        { "label": "10-50", "points": 10 },
        { "label": "Above 50", "points": 15 }
      ]
    },
    {
      "question": "What was the average increase in literacy skills observed?",
      "options": [
        { "label": "Below 25%", "points": 5 },
        { "label": "25%-50%", "points": 10 },
        { "label": "Above 50%", "points": 15 }
      ]
    },
    {
      "question": "Did the program provide access to essential educational resources?",
      "options": [
        { "label": "Yes", "points": 2 },
        { "label": "No", "points": 0 }
      ]
    }
  ]
}
```

2 DELETE
```javascript
http://localhost:3000/reports/id
```


3 GET
```javascript
http://localhost:3000/reports/2
```

4 Update
```javascript
http://localhost:3000/reports/3
```
```javascript

{
  "category": "update education",
  "points": 37,
  "questions": [
    {
      "question": "this initiative?",
      "options": [
        { "label": "1-10", "points": 5 },
        { "label": "10-50", "points": 10 },
        { "label": "Above 50", "points": 15 }
      ]
    },
    {
      "question": "What was the percentage reduction in reported health issues within the target community?",
      "options": [
        { "label": "1-10%", "points": 5 },
        { "label": "10-50%", "points": 10 },
        { "label": "Above 50%", "points": 15 }
      ]
    },
    {
      "question": "Did the program provide access to preventative healthcare services?",
      "options": [
        { "label": "Yes", "points": 3 },
        { "label": "No", "points": 0 }
      ]
    }
  ]
}
```

5 Post
```javascript

http://localhost:3000/reports/updatePoints
```
Body-json

```javascript
{
  "id": 7,
  "questionIndex": 0,
  "optionIndex": 0
}

```
