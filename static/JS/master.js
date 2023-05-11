document.addEventListener("DOMContentLoaded", () => {
  const HomeSvgCode =
    '<svg width="862" height="1072" viewBox="0 0 862 1072" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M861 1H41L21 70L11 106.5L5.5 143L2.5 173L1 192V212.5V236L2.5 258L5.5 285.5L7 302L10.5 321.5L13.5 341L22 373.5L27.5 389.5L35 409.5L40 418L53.5 443L69.5 465.5L86 487.5L104 506L134.5 534L157.5 551L186.5 572L244.5 607.5L273 626.5L287 636L308.5 651.5L328.5 667.5L359.5 694.5L385 720L404 740.5L430.5 776.5L462.5 835.5L502 893L550 947.5L604.5 1000.5L639.5 1030.9L681 1057L694 1063L705.5 1066.5L718 1070L727.5 1071.5H744L765.5 1070L776.5 1066.5L793.5 1061.5L808 1055L835 1043L861 1030.9V1Z" fill="lightblue" stroke="none"/></svg>';

  const HomeSvgContainer = document.getElementById("Home-svg");
  HomeSvgContainer.innerHTML = HomeSvgCode;

  // About SVG
  const AboutSvgCode =
    '<svg width="333" height="1054" viewBox="0 0 333 1054" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M73.3906 36L53.9201 24.5L46.4314 19.5L38.4434 15.5L21.4691 9L10.9849 4L1 1V1053L6.99095 1052L11.9834 1050L14.9789 1048L32.4525 1042.5L48.4284 1037L67.3997 1031L86.371 1024L101.848 1017.5L120.32 1008.5L135.796 998.5L153.769 987L168.747 976.5L190.214 959L205.192 946L220.169 932L237.143 916.5L250.124 901.5L261.107 882.5L270.593 864.5L282.075 836L290.063 813.5L296.054 793L301.546 775L306.039 757L310.532 746.5L319.519 714.5L325.011 693L329.005 671L332 646L330.502 605V575.5L326.508 539L322.514 510L318.52 488.5L312.03 462L305.041 441.5L297.552 409L291.062 385L284.572 360L272.09 325.5L258.611 294L243.633 264L231.152 234L217.673 208.5L210.184 195L200.199 175.5L189.216 156.5L177.733 140.5L151.772 105.5L136.795 89L124.314 76.5L103.845 58L73.3906 36Z" fill="coral" stroke="none"/> </svg>';

  const AboutSvgContainer = document.getElementById("About-svg");
  AboutSvgContainer.innerHTML = AboutSvgCode;

  // Work section
  const workInfoData = [
    {
      iconUrl: "static/SVGIcons/RegisterCardWork.svg",
      title: "Registration",
      text: " You will need to register as a blood donor by providing your personal information and filling out a medical questionnaire.",
    },
    {
      iconUrl: "static/SVGIcons/ScreeningCardWork.svg",
      title: "Screening",
      text: " A healthcare professional will conduct a screening process to determine if you are fit to donate blood. This may include taking your blood pressure, temperature, and hemoglobin level.",
    },
    {
      iconUrl: "static/SVGIcons/DonationCardWork.svg",
      title: "Donation",
      text: " Once you have been cleared for donation, you will be taken to a donation area where a healthcare professional will draw blood from your arm using a sterile needle.",
    },
    {
      iconUrl: "static/SVGIcons/RefreshmentCardWork.svg",
      title: "Refreshment",
      text: "After donation, you will be asked to rest for a short period of time  and have a snack or drink to help replenish your fluids.",
    },
  ];

  const workSectionBottom = document.querySelector(".work-section-bottom");

  if (workSectionBottom !== null) {
    if (workSectionBottom.innerHTML.trim() === "") {
      workInfoData.forEach((data) => {
        const { iconUrl, title, text } = data;
        const workSectionInfo = document.createElement("div");
        workSectionInfo.classList.add("work-section-info");

        const infoBoxesImgContainer = document.createElement("div");
        infoBoxesImgContainer.classList.add("info-boxes-img-container");
        const iconElement = document.createElement("img");
        iconElement.classList.add("workIcon");
        iconElement.src = iconUrl;
        infoBoxesImgContainer.appendChild(iconElement);
        workSectionInfo.appendChild(infoBoxesImgContainer);

        const h2 = document.createElement("h2");
        h2.textContent = title;
        workSectionInfo.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = text;
        workSectionInfo.appendChild(p);

        workSectionBottom.appendChild(workSectionInfo);
      });
    }
  } else {
    console.error(
      "Could not find the element with the class 'work-section-bottom'"
    );
  }

 
});
