# TypeScript Browser Testing Project

This project provides a simple setup for testing TypeScript functions in a browser environment. It includes a workflow for writing TypeScript functions, compiling them, and displaying results in a web browser.

## Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yuantsai1115/ncree-playground.git
   cd ncree-playground
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Project Structure

```
ncree-playground/
├── src/
│   ├── external-reference/
│   │   └── [CONSTANTS OR FUNCTIONS SHARED ACROSS REPO, e.g. lookup tables]
│   ├── types/
│   │   └── [TYPES SHARED ACROSS REPO, SHOULD NOT ADD OR CHANGE FREQUENTLY]
│   ├── formulas/
│   │   ├── sample-formula.ts
│   │   └── [CREATE MORE FUNCTIONS HERE, e.g. 9-first-floor-ultimate-shear-force.ts]
│   ├── index.ts // we call functions from here for testing
├── dist/
│   └── index.html
├── package.json
├── tsconfig.json
└── webpack.config.js
```

- `src/formulas/your-formula-name.ts`: Write your TypeScript functions here
- `src/index.ts`: Main file for importing functions and displaying results
- `dist/index.html`: HTML file for viewing results in the browser

## Usage

1. Write your TypeScript functions in `src/formulas/your-formula-name.ts`.

2. Import and use these functions in `src/index.ts`. Use `document.body.innerHTML` to display results.

3. Build the project:
   ```
   npm run build
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:9000` to see the results.

## Workflow

1. Develop:
   - Write and modify functions in `src/formulas/YOUR-FUNCTIONS.ts`
   - Update `src/index.ts` to use new functions and display results
   - The browser will automatically reload when you save changes

2. Build:
   - Run `npm run build` to compile TypeScript and bundle the project

3. Test:
   - Open `http://localhost:9000` in your browser
   - Check the displayed results
   - Use browser developer tools for debugging if needed

4. Iterate:
   - Make changes to your functions or display logic
   - Webpack will automatically recompile, and you can refresh the browser to see updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
