# KBL

**KITSbookLIBRARY** — tracking book app


#### Main React Components Structure
```
<App />
  <Header />
  <BookDetails />

  <!-- Main page with <Route /> path='/' -->
  
    <Library />
      <Shelf />
        <Book />
    <OpenSearch />

  <!-- Search page <Route /> path='/search' -->

    <SearchBook />
      <Book />
  <Footer />
```

## How to Run Application

#### Possible choices:

**1**. You can run a **[live demo](https://akrock0512.github.io/KBL/)** deployed with `gh-pages`

**2**. Or run it on your local machine:
* download or clone the repository
* next follow these [instructions](#instructions)



### Instructions
**Running application on local machine**

To get started:

* `cd` _react-project-myreads_ folder
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site: `http://localhost:3000` if not open automatically


## About the project

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Completed
* Want to Read


Application is created to help you to managing your personal library and stack of books. There is 7 books as default but:

- You can search for new books in the `/search` page or click **+** button on the right bottom corner.

- Use menu below book cover to select shelf **Reading**, **Want to**, **Completed** to put the book on right one

- **None** removes the book from each shelf in main page


#### Dependencies & External Libraries Used

* React Router - [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
* Prop-Types [`prop-types`](https://www.npmjs.com/package/prop-types)

