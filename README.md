# Search Page React Next

## ✅ Status

[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/search-page-react-next/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/search-page-react-next/actions/workflows/checks.yml?query=branch%3Amain)

## The Problem

> As a consumer I want to research financial topics so I can make informed
> decisions.

## Requirements

```
Scenario: The application shall provide a search form
  Given the user visits the application
  Then a search field is displayed
  And a button is displayed with the text "Search"
```

```
Scenario: The search shall be triggerable by clicking the "Search" button
  Given the user has entered a search query
  When the user clicks the "Search" button
  Then matching search results are displayed
```

```
Scenario: The search shall be triggerable by pressing the Enter key
  Given the user has entered a search query
  And the input field is currently focused
  When the user clicks presses the Enter key on their keyboard
  Then matching search results are displayed
```

```
Scenario: A loading state shall be shown while search results are loading
  Given the user has entered a search query
  When the user submits their search
  Then a loading state is shown until the search results are available
```

```
Scenario: Search results shall show result title and description
  Given a user has performed a search
  When search results are displayed
  Then the title and description of each search result are displayed
```

```
Scenario: Clicking a search result title shall open its URLs in a new tab
  Given search results are displayed
  When a user clicks the title of a search result item
  Then the URL of the search result is opened in a new tab
```

```
Scenario: Search results shall be marked as their content type
  Given search results are displayed
  Then each result is clearly marked as a video, playlist, or blog post
```

```
Scenario: The user shall be informed if no search results match their query
  Given the user has performed a search
  When there are no results matching their search query
  Then the message "There are no results matching your query." is displayed
```
