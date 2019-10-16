# ESports Website Architecture

This document describes the (current) plan for the architecture for the IUS Esports Club website.

## Backend
@Mason

Possible tables needed:

* Calendar_Items
* Tournament_events (possible link to calendar_items to show there)
* Member_list(memberID, name, blah blah blah)

## Frontend

For our frontend we will be using ReactJS to serve the website to the users. There will be a dashboard with 3 branching pages off of it.

The dashboard will contain links to the three other pages(recruitment, calendar, tournament events), as well as an introduction to the club, a link to the source code on github. Any data on these pages is recieved from the backend via endpoint. Every page has the ability to go back to the dashboard via home page.

Here is the diagram that can explain this better

![A beautiful diagram][diagram]

[diagram]: ../assets/diagram.svg "Navigation"

[Dashboard] goes to [Reeruitment], [Tournament], [Polls], [Calendar] Data for these 4 pages is recieved via endpoint, which pulls data needed for their respective pages from a database.
