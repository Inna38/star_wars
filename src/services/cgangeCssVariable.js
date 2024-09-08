const cgangeCssVariable = (theme) => {
  const root = document.querySelector(":root");

  root.style.setProperty(
    "--theme-defaul-header",
    `var(--theme-${theme}-header)`
  );

  root.style.setProperty(
    "--theme-defaul-bg-image",
    `var(--theme-${theme}-bg-image)`
  );
};

export default cgangeCssVariable;
