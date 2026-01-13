// You (JS engine) are single-threaded.
// You tell your assistants (Environment) to do tasks like boiling water (setTimeout) or fetching ingredients (fetch).
// They do it independently.
// When they finish, they call you back (event loop pushes callback to JS thread) to continue cooking.

