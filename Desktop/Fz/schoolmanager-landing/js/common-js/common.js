const ACCOUNTS_API = "https://accounts.smartschoolwave.com/";
let ssoUrl =
    "https://accounts.smartschoolwave.com/?client_id=tfi&redirect_uri=https://www.smartschoolwave.com/institute/onboarding";

if (window ? .location ? .origin == "https://uat.smartschoolwave.com")
    ssoUrl =
    "https://accounts-beta.smartschoolwave.com/?client_id=624301225944aeb7dfdea7b8&redirect_uri=https://uat.smartschoolwave.com/institute/onboarding";

const domainReplacer = () => {
    let domain = "";
    if (window ? .location ? .origin == "https://teachpay.in") {
        domain = "https://www.smartschoolwave.com";
    } else if (window ? .location ? .origin == "https://teachpayqa.in") {
        domain = "https://www.smartschoolwave.qa";
    } else if (window ? .location ? .origin == "https://schools.smartschoolwave.qa") {
        domain = "https://www.smartschoolwave.qa";
    } else if (window ? .location ? .origin == "https://schools.smartschoolwave.com") {
        domain = "https://www.smartschoolwave.com";
    }
    return domain;
};
let footerCompanyLinks = false;
const showFooterCompanyLinks = () => {
    if (footerCompanyLinks) {
        document.getElementById("company-footer-opt").classList.add("hidden");
        document.getElementById("company-footer-opt").classList.remove("flex");
    } else {
        document.getElementById("company-footer-opt").classList.remove("hidden");
        document.getElementById("company-footer-opt").classList.add("flex");
    }
    footerCompanyLinks = !footerCompanyLinks;
};

let footerSolutionLinks = false;
const showFooterSolutionLinks = () => {
    if (footerSolutionLinks) {
        document.getElementById("solutions-footer-opt").classList.add("hidden");
        document.getElementById("solutions-footer-opt").classList.remove("flex");
    } else {
        document.getElementById("solutions-footer-opt").classList.remove("hidden");
        document.getElementById("solutions-footer-opt").classList.add("flex");
    }
    footerSolutionLinks = !footerSolutionLinks;
};

let footerContactLinks = false;
const showFooterContactLinks = () => {
    if (footerContactLinks) {
        document.getElementById("contact-footer-opt").classList.add("hidden");
        document.getElementById("contact-footer-opt").classList.remove("flex");
    } else {
        document.getElementById("contact-footer-opt").classList.remove("hidden");
        document.getElementById("contact-footer-opt").classList.add("flex");
    }
    footerContactLinks = !footerContactLinks;
};

let footerToolsLinks = false;
const showFooterToolsLinks = () => {
    if (footerToolsLinks) {
        document.getElementById("tools-footer-opt").classList.add("hidden");
        document.getElementById("tools-footer-opt").classList.remove("flex");
    } else {
        document.getElementById("tools-footer-opt").classList.remove("hidden");
        document.getElementById("tools-footer-opt").classList.add("flex");
    }
    footerToolsLinks = !footerToolsLinks;
};

// Toggle menu burger code
let menuBurger = document.getElementById("burger-menu-icon");
let menuClose = document.getElementById("close-menu-icon");
let menuList = document.getElementById("mobile-menu");

const closeBurgerMenu = () => {
    let menuBurger = document.getElementById("burger-menu-icon");
    let menuClose = document.getElementById("close-menu-icon");
    let menuList = document.getElementById("mobile-menu");
    menuList.style.display = "none";
    menuBurger.style.display = "block";
    menuClose.style.display = "none";
};

if (menuBurger) {
    menuBurger.addEventListener("click", () => {
        let menuBurger = document.getElementById("burger-menu-icon");
        let menuClose = document.getElementById("close-menu-icon");
        let menuList = document.getElementById("mobile-menu");

        menuList.style.display = "block";
        menuBurger.style.display = "none";
        menuClose.style.display = "block";
    });

    menuClose.addEventListener("click", closeBurgerMenu);
}

let eventTriggered = false;
const triggerEvent = () => {
    if (!eventTriggered) {
        eventTriggered = true;
        window.getStartedModalFilled("GET_STARTED_MODAL_FILLED");
    }
};

// This is to toggle the group of school inputs on the radio button checked in lead-form on landing page
const tmTfiCheckIndependentOrGroupOfSchools = () => {
    if (document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS}`) ? .checked) {
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS}`) ?
            .classList ? .remove("hidden");
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS}`) ?
            .classList ? .add("lg:flex");
        document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME_DIV}`) ?
            .classList ? .add("hidden");
        document.getElementById(`${TFI_FORM_INSTITUTE_NAME}`).value = "";
        document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES}`).value = "1";
    } else {
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS}`) ?
            .classList ? .add("hidden");
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS}`) ?
            .classList ? .remove("lg:flex");
        document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME_DIV}`) ?
            .classList ? .remove("hidden");
        document.getElementById(`${TFI_FORM_NAME_OF_GROUP}`).value = "";
        document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES}`).value = "";
    }
};

// This is to toggle the group of school inputs on the radio button checked in lead-form modal on landing page
const tmTfiMobileCheckIndependentOrGroupOfSchools = () => {
    if (!eventTriggered) {
        triggerEvent();
    }
    if (document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_MOBILE}`) ? .checked) {
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS_MOBILE}`) ?
            .classList ? .remove("hidden");
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS_MOBILE}`) ?
            .classList ? .add("lg:flex");
        document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME_DIV_MOBILE}`) ?
            .classList ? .add("hidden");
        document.getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}`).value = "";
        document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}`).value =
            "1";
        if (checkInternational()) {
            document
                .getElementById("inst-form-modal-body-international") ?
                .classList ? .add("inst-form-modal-body-expanded-international");
        } else {
            document
                .getElementById("inst-form-modal-body-domestic") ?
                .classList ? .add("inst-form-modal-body-expanded");
        }
    } else {
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS_MOBILE}`) ?
            .classList ? .add("hidden");
        document
            .getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_INPUTS_MOBILE}`) ?
            .classList ? .remove("lg:flex");
        document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME_DIV_MOBILE}`) ?
            .classList ? .remove("hidden");
        document.getElementById(`${TFI_FORM_NAME_OF_GROUP_MOBILE}`).value = "";
        document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}`).value = "";
        if (checkInternational()) {
            document
                .getElementById("inst-form-modal-body-international") ?
                .classList ? .remove(
                    "inst-form-modal-body-expanded-international",
                    "inst-form-modal-body-expanded"
                );
        } else {
            document
                .getElementById("inst-form-modal-body-domestic") ?
                .classList ? .remove("inst-form-modal-body-expanded");
        }
    }
};

let isMwebFeatureOpen = false;
const showMwebFeatures = () => {
    if (isMwebFeatureOpen) {
        document
            .getElementById("mweb-feature-dropdown-cont")
            .classList.add("hidden");
    } else {
        document
            .getElementById("mweb-feature-dropdown-cont")
            .classList.remove("hidden");
    }
    isMwebFeatureOpen = !isMwebFeatureOpen;
};

// Web form data
const TFI_FORM_ADMIN_NAME = "tm-tfi-contact-form-name";
const TFI_FORM_INSTITUTE_NAME = "tm-tfi-contact-form-institute-name";
const TFI_FORM_PHONE_NUMBER = "tm-tfi-contact-form-phone";
const TFI_FORM_PHONE_NUMBER_ISD = "tm-tfi-contact-form-country-code";
const TFI_FORM_ADMIN_ROLE = "tm-tfi-contact-form-role";
const TFI_FORM_EMAIL = "tm-tfi-contact-form-institute-email";
const TFI_FORM_SUCCESS = "tm-tfi-form-success";
const TFI_FORM = "tm-tfi-input-form";
const TFI_FORM_ORGANIZATION_TYPE = "tm-tfi-contact-form-org-type";
const TFI_FORM_NAME_OF_GROUP = "tm-tfi-contact-form-name-of-group";
const TFI_FORM_NUMBER_OF_BRANCHES = "tm-tfi-contact-form-number-of-branches";
const TFI_FORM_GROUP_OF_SCHOOLS = "tm-tfi-contact-form-group-of-schools";
const TFI_FORM_GROUP_OF_SCHOOLS_INPUTS =
    "tm-tfi-contact-form-group-of-schools-inputs";
const TFI_FORM_INSTITUTE_NAME_DIV = "tm-tfi-contact-form-institute-name-div";

// MWeb form data
const TFI_FORM_ADMIN_NAME_MOBILE = "tm-tfi-contact-form-name-mobile";
const TFI_FORM_INSTITUTE_NAME_MOBILE =
    "tm-tfi-contact-form-institute-name-mobile";
const TFI_FORM_PHONE_NUMBER_MOBILE = "tm-tfi-contact-form-phone-mobile";
const TFI_FORM_PHONE_NUMBER_ISD_MOBILE =
    "tm-tfi-contact-form-country-code-mobile";
const TFI_FORM_EMAIL_MOBILE = "tm-tfi-contact-form-institute-email-mobile";
const TFI_FORM_ADMIN_ROLE_MOBILE = "tm-tfi-contact-form-role-mobile";
const TFI_FORM_MOBILE = "tm-tfi-input-form-mobile";
const TFI_FORM_SUCCESS_MOBILE = "tm-tfi-form-success-mobile";
const TFI_FORM_ORGANIZATION_TYPE_MOBILE = "tm-tfi-contact-form-org-type-mobile";
const TFI_FORM_NAME_OF_GROUP_MOBILE =
    "tm-tfi-contact-form-name-of-group-mobile";
const TFI_FORM_NUMBER_OF_BRANCHES_MOBILE =
    "tm-tfi-contact-form-number-of-branches-mobile";
const TFI_FORM_GROUP_OF_SCHOOLS_MOBILE =
    "tm-tfi-contact-form-group-of-schools-mobile";
const TFI_FORM_GROUP_OF_SCHOOLS_INPUTS_MOBILE =
    "tm-tfi-contact-form-group-of-schools-inputs-mobile";
const TFI_FORM_INSTITUTE_NAME_DIV_MOBILE =
    "tm-tfi-contact-form-institute-name-div-mobile";
const TFI_FORM_SCHOOL_BOARD_MOBILE = "tm-tfi-contact-form-school-board-mobile";
const TFI_FORM_AVERAGE_FEE_MOBILE = "tm-tfi-contact-form-average-fee-mobile";

const ROLE_TO_UTYPE_MAPPING = {
    Teacher: 1,
    Student: 2,
    "School Admin": 0,
    Principal: 0,
    "School Owner": 0,
};
let roleDropDownLock = true;
let flagListLock = true;
let flagListLockForm = true;
let flagListLockMobile = true;
let countryListDropDownClicked = false;
let countryListDropDownFormClicked = false;
let roleIndexMobile = 0;
let indexToRoleMapping = {
    0: "Select Role",
    1: "Teacher",
    2: "Student",
    3: "School Admin",
    4: "Principal",
    5: "School Owner",
    6: "Parent",
};

const selectRoleChangeData = document.getElementById(
    TFI_FORM_ADMIN_ROLE_MOBILE
);
const selectBoardChangeData = document.getElementById(
    TFI_FORM_SCHOOL_BOARD_MOBILE
);
const selectAverageFeesChangeData = document.getElementById(
    TFI_FORM_AVERAGE_FEE_MOBILE
);

document.querySelectorAll(".trigger-form-fill-event").forEach((item) => {
    item.addEventListener("keydown", (event) => {
        //handle click
        triggerEvent();
    });
});

selectRoleChangeData ? .addEventListener("change", function(event) {
    triggerEvent();
});
selectBoardChangeData ? .addEventListener("change", function(event) {
    triggerEvent();
});
selectAverageFeesChangeData ? .addEventListener("change", function(event) {
    triggerEvent();
});

const getAdditionalParmas = () => {
    let url = new URL(window ? .location ? .href);
    let utmSource = url ? .searchParams ? .get("utm_source");
    let utmMedium = url ? .searchParams ? .get("utm_medium");
    let utmCampaign = url ? .searchParams ? .get("utm_campaign");
    additionalParmas = [];
    if (utmSource) additionalParmas.push("utm_source=" + utmSource);
    if (utmMedium) additionalParmas.push("utm_medium=" + utmMedium);
    if (utmCampaign) additionalParmas.push("utm_campaign=" + utmCampaign);
    if (additionalParmas.length > 0) return "&" + additionalParmas.join("&");
    return "";
};

const triggerFormModal = (redirectToLogin = false, from_cbse = false) => {
    var modalWrapperEle = document.getElementsByClassName('modal-wrapper')[0]
    if (modalWrapperEle != undefined) {
        modalWrapperEle.style.display = "flex";
    }
    if (window.getStartedModalOpen) {
        window ? .getStartedModalOpen();
    }
    if (redirectToLogin === true || redirectToLogin === "True") {
        window.location.replace(
            `${ACCOUNTS_API}?add_account=true&redirect_to_admission=true`
        );
    } else {
        let element = document.getElementById("inst-form-modal-id");
        if (element) {
            element.style.display = "block";
            if (from_cbse) {
                document.getElementById('modal-title-cbse') ? .classList ? .add('block')
                document.getElementById('modal-title-cbse') ? .classList ? .remove('hidden')
                document.getElementById('modal-title-default') ? .classList ? .add('lg:hidden')
                document.getElementById('modal-title-default-mobile') ? .classList ? .add('hidden')
            } else {
                document.getElementById('modal-title-default') ? .classList ? .remove('lg:hidden')
                document.getElementById('modal-title-default-mobile') ? .classList ? .remove('hidden')
                document.getElementById('modal-title-cbse') ? .classList ? .add('hidden')
                document.getElementById('modal-title-cbse') ? .classList ? .remove('block')
            }
        }
    }
};

const getDeviceType = () => {
    let deviceType = "desktop";
    const userAgent = navigator.userAgent.toLowerCase();

    if (
        /(?:iPod|iPhone|Android|webOS|BlackBerry|IEMobile|Opera Mini)\b/i.test(
            userAgent
        ) &&
        !/tablet/i.test(userAgent) &&
        !/iPad|Tablet/i.test(userAgent)
    ) {
        deviceType = "mobile";
    } else if (
        /(?:iPad|PlayBook|Kindle|Tablet|Surface|Nexus)\b/i.test(userAgent)
    ) {
        deviceType = "tablet";
    }

    return deviceType;
};

const checkInternational = () => {
    let isInternational = document ?
        .getElementById("is_international") ?
        .innerText.trim();
    if (isInternational == "True") return true;
    return false;
};

$(document).ready(function() {
    // Web form submit
    const leadFormSubmit = (event) => {
        let adminName = document
            .getElementById(`${TFI_FORM_ADMIN_NAME}`)
            .value.trim();
        let instituteName = document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME}`)
            .value.trim();
        let adminPhoneNumber = document
            .getElementById(`${TFI_FORM_PHONE_NUMBER}`)
            .value.trim();
        let adminPhoneNumberCode = document
            .getElementById(`${TFI_FORM_PHONE_NUMBER_ISD}`)
            .innerText.trim();
        let adminRole =
            indexToRoleMapping[
                document.getElementById(TFI_FORM_ADMIN_ROLE).selectedIndex
            ].trim();
        let adminEmail = "";
        let organisationType = "";
        let organisationTypeInputElements = document.getElementsByName(
            `${TFI_FORM_ORGANIZATION_TYPE}`
        );
        for (i = 0; i < organisationTypeInputElements.length; i++) {
            if (organisationTypeInputElements[i] ? .checked) {
                organisationType = organisationTypeInputElements[i].value;
            }
        }

        let nameOfGroup = "";
        if (document.getElementById(`${TFI_FORM_NAME_OF_GROUP}`) != null) {
            nameOfGroup = document
                .getElementById(`${TFI_FORM_NAME_OF_GROUP}`)
                .value.trim();
        }

        let numberOfBranches = "";
        if (document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES}`) != null) {
            numberOfBranches = document
                .getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES}`)
                .value.trim();
        }

        if (checkInternational()) {
            adminEmail = document.getElementById(`${TFI_FORM_EMAIL}`) ? .value ? .trim();
        }

        let flag = true;
        let url = new URL(window ? .location ? .href);
        let utmSource = url ? .searchParams ? .get("utm_source");
        let utmMedium = url ? .searchParams ? .get("utm_medium");
        let utmCampaign = url ? .searchParams ? .get("utm_campaign");
        let utmContent = url ? .searchParams ? .get("utm_content");
        let utmKeyword = url ? .searchParams ? .get("utm_keyword");
        let deviceType = getDeviceType();

        if (adminPhoneNumberCode.charAt(0) === "+") {
            adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
        }

        if (String(adminName).length < 3) {
            document.getElementById(`${TFI_FORM_ADMIN_NAME}-err`).innerText =
                "Name must have atleast 3 characters";
            flag = false;
        } else document.getElementById(`${TFI_FORM_ADMIN_NAME}-err`).innerText = "";

        if (document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS}`) ? .checked) {
            if (String(nameOfGroup) == "") {
                document.getElementById(`${TFI_FORM_NAME_OF_GROUP}-err`).innerText =
                    "Group name is required";
                flag = false;
            } else
                document.getElementById(`${TFI_FORM_NAME_OF_GROUP}-err`).innerText = "";

            if (parseInt(numberOfBranches) <= 0) {
                document.getElementById(
                    `${TFI_FORM_NUMBER_OF_BRANCHES}-err`
                ).innerText = "Number of branches is required";
                flag = false;
            } else
                document.getElementById(
                    `${TFI_FORM_NUMBER_OF_BRANCHES}-err`
                ).innerText = "";
        } else {
            if (String(instituteName).length < 3) {
                document.getElementById(`${TFI_FORM_INSTITUTE_NAME}-err`).innerText =
                    "School name must have atleast 3 characters";
                flag = false;
            } else
                document.getElementById(`${TFI_FORM_INSTITUTE_NAME}-err`).innerText =
                "";
        }

        if (/^[0-9]{7,15}$/.test(String(adminPhoneNumber).trim()))
            document.getElementById(`${TFI_FORM_PHONE_NUMBER}-err`).innerText = "";
        else {
            document.getElementById(`${TFI_FORM_PHONE_NUMBER}-err`).innerText =
                "Phone number must have atleast 7 digits and atmost 15 digits";
            flag = false;
        }

        if (adminRole.localeCompare("Select Role") != 0)
            document.getElementById(`${TFI_FORM_ADMIN_ROLE}-err`).innerText = "";
        else {
            document.getElementById(`${TFI_FORM_ADMIN_ROLE}-err`).innerText =
                "Please select a role";
            flag = false;
        }

        if (checkInternational()) {
            if (
                /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(adminEmail).trim()
                )
            )
                document.getElementById(`${TFI_FORM_EMAIL}-err`).innerText = "";
            else {
                document.getElementById(`${TFI_FORM_EMAIL}-err`).innerText =
                    "Invalid Email Address";
                flag = false;
            }
        }

        if (organisationType == "Group of Schools") {
            instituteName = nameOfGroup;
        }

        if (flag) {
            event.preventDefault();

            grecaptcha.ready(function() {
                grecaptcha
                    .execute("6Ld53WwaAAAAALUdYMhgWVTy4-H4512vhFq-rdng", {
                        action: "submit",
                    })
                    .then(function(token) {
                        // call to server
                        $.ajax({
                            type: "POST",
                            url: "/handle-tfi-contact-form",
                            data: {
                                admin_name: adminName,
                                institute_name: instituteName,
                                device_type: deviceType,
                                admin_phone_number: `+${adminPhoneNumberCode}-${adminPhoneNumber}`,
                                admin_role: adminRole,
                                admin_email: adminEmail,
                                token: token,
                                utm_source: utmSource,
                                utm_medium: utmMedium,
                                utm_campaign: utmCampaign,
                                utm_content: utmContent,
                                utm_keyword: utmKeyword,
                                lead_form_url: window ? .location ? .href,
                                organisation_type: organisationType,
                                name_of_group: nameOfGroup,
                                number_of_branches: numberOfBranches,
                            },
                        }).done(function(data) {});

                        event.preventDefault();

                        window ? .tfiLeadFormSubmitted(
                            "TFI_LEAD_FORM_SUBMITTED",
                            adminName,
                            instituteName,
                            adminRole,
                            adminPhoneNumberCode,
                            adminPhoneNumber,
                            utmSource,
                            utmMedium,
                            utmCampaign,
                            utmContent,
                            utmKeyword,
                            "Landing Page",
                            organisationType,
                            nameOfGroup,
                            numberOfBranches
                        );
                        if (ROLE_TO_UTYPE_MAPPING[adminRole] == 0) {
                            if (
                                document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS}`) ? .checked
                            ) {
                                openDemoBookedModal();
                            } else {
                                window.location.replace(
                                    `${ssoUrl}&tm_action=redirected_login&tm_name=${adminName}&tm_ins_name=${instituteName}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}&tm_organisation_type=${organisationType}` +
                                    getAdditionalParmas()
                                );
                            }
                        } else if (
                            ROLE_TO_UTYPE_MAPPING[adminRole] == 1 ||
                            ROLE_TO_UTYPE_MAPPING[adminRole] == 2
                        ) {
                            window.location.replace(
                                `/login?tm_action=redirected_login&tm_name=${adminName}&utype=${ROLE_TO_UTYPE_MAPPING[adminRole]}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                                getAdditionalParmas()
                            );
                        } else {
                            //hide input form and start loading
                            document.getElementById(`${TFI_FORM}`).style.display = "none";
                            document.getElementById(`${TFI_FORM_SUCCESS}`).style.display =
                                "block";
                        }
                    });
            });
        }
    };
    const leadformSubmitButton = document.getElementById(
        "tm-tfi-contact-form-submit"
    );
    if (leadformSubmitButton) {
        leadformSubmitButton.addEventListener("click", (events) => {
            leadFormSubmit(events);
        });
    }

    function mwebSubmit(event, id, openDemoBookedModalFlag) {
        let adminName = document
            .getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}`)
            .value.trim();
        let instituteName = document
            .getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}`)
            .value.trim();
        let adminPhoneNumber = document
            .getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}`)
            .value.trim();
        let adminPhoneNumberCode = document
            .getElementById(`${TFI_FORM_PHONE_NUMBER_ISD_MOBILE}`)
            .innerText.trim();
        let adminRole = null;
        adminRole =
            indexToRoleMapping[
                document.getElementById(TFI_FORM_ADMIN_ROLE_MOBILE).selectedIndex
            ].trim();
        let adminEmail = "";
        if (checkInternational()) {
            adminEmail = document
                .getElementById(`${TFI_FORM_EMAIL_MOBILE}`) ?
                .value ? .trim();
        }

        let flag = true;
        let url = new URL(window ? .location ? .href);
        let preventRedirect = false;
        if (url ? .href ? .includes("cbse") && document.getElementById('modal-title-cbse').classList.contains('block'))
            preventRedirect = true;
        let utmSource = url ? .searchParams ? .get("utm_source");
        let utmMedium = url ? .searchParams ? .get("utm_medium");
        let utmCampaign = url ? .searchParams ? .get("utm_campaign");
        let utmContent = url ? .searchParams ? .get("utm_content");
        let utmKeyword = url ? .searchParams ? .get("utm_keyword");
        let deviceType = getDeviceType();

        let organisationType = "";
        organisationTypeInputElements = document.getElementsByName(
            `${TFI_FORM_ORGANIZATION_TYPE_MOBILE}`
        );
        for (i = 0; i < organisationTypeInputElements.length; i++) {
            if (organisationTypeInputElements[i] ? .checked) {
                organisationType = organisationTypeInputElements[i].value;
            }
        }

        let nameOfGroup = null;
        if (document.getElementById(`${TFI_FORM_NAME_OF_GROUP_MOBILE}`) != null) {
            nameOfGroup = document
                .getElementById(`${TFI_FORM_NAME_OF_GROUP_MOBILE}`)
                .value.trim();
        }

        let numberOfBranches = null;
        if (
            document.getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}`) != null
        ) {
            numberOfBranches = document
                .getElementById(`${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}`)
                .value.trim();
        }

        let schoolBoard = "";
        let schoolBoardElements = document.getElementById(
            TFI_FORM_SCHOOL_BOARD_MOBILE
        );

        if (schoolBoardElements) {
            schoolBoard =
                schoolBoardElements.options[schoolBoardElements.selectedIndex].text;
        }

        let averageFees = "";
        let averageFeesElements = document.getElementById(
            TFI_FORM_AVERAGE_FEE_MOBILE
        );
        if (averageFeesElements) {
            averageFees =
                averageFeesElements.options[averageFeesElements.selectedIndex].text;
        }

        if (adminPhoneNumberCode.charAt(0) === "+") {
            adminPhoneNumberCode = adminPhoneNumberCode.substring(1);
        }

        if (String(adminName).length < 3) {
            document.getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}-err`).innerText =
                "Name must have atleast 3 characters";
            flag = false;
            document
                .getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}`)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        } else document.getElementById(`${TFI_FORM_ADMIN_NAME_MOBILE}-err`).innerText = "";

        if (
            document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_MOBILE}`) ? .checked
        ) {
            if (String(nameOfGroup) == "") {
                document.getElementById(
                    `${TFI_FORM_NAME_OF_GROUP_MOBILE}-err`
                ).innerText = "Group name is required";
                flag = false;
                document
                    .getElementById(`${TFI_FORM_NAME_OF_GROUP_MOBILE}`)
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            } else
                document.getElementById(
                    `${TFI_FORM_NAME_OF_GROUP_MOBILE}-err`
                ).innerText = "";

            if (parseInt(numberOfBranches) <= 0) {
                document.getElementById(
                    `${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}-err`
                ).innerText = "Number of branches is required";
                flag = false;
            } else
                document.getElementById(
                    `${TFI_FORM_NUMBER_OF_BRANCHES_MOBILE}-err`
                ).innerText = "";
        } else {
            if (String(instituteName).length < 3) {
                document.getElementById(
                    `${TFI_FORM_INSTITUTE_NAME_MOBILE}-err`
                ).innerText = "School name must have atleast 3 characters";
                flag = false;
                document
                    .getElementById(`${TFI_FORM_INSTITUTE_NAME_MOBILE}`)
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            } else
                document.getElementById(
                    `${TFI_FORM_INSTITUTE_NAME_MOBILE}-err`
                ).innerText = "";
        }

        if (/^[0-9]{7,15}$/.test(String(adminPhoneNumber).trim()))
            document.getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}-err`).innerText =
            "";
        else {
            document.getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}-err`).innerText =
                "Phone number must have atleast 7 digits and atmost 15 digits";
            flag = false;
            document
                .getElementById(`${TFI_FORM_PHONE_NUMBER_MOBILE}`)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        }

        const errorElement = `${TFI_FORM_ADMIN_ROLE_MOBILE}-err`;

        if (adminRole.localeCompare("Select Role") != 0) {
            document.getElementById(errorElement).innerText = "";
        } else {
            document.getElementById(errorElement).innerText = "Please select a role";
            // scroll to the element
            document
                .getElementById(errorElement)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            flag = false;
        }

        if (document.getElementById(TFI_FORM_SCHOOL_BOARD_MOBILE)) {
            if (schoolBoardElements.selectedIndex != 0) {
                document.getElementById(
                    `${TFI_FORM_SCHOOL_BOARD_MOBILE}-err`
                ).innerText = "";
            } else {
                document.getElementById(
                    `${TFI_FORM_SCHOOL_BOARD_MOBILE}-err`
                ).innerText = "Please select a school board";
                flag = false;

                // Scroll to the error message
                const errorMessage = document.getElementById(
                    `${TFI_FORM_SCHOOL_BOARD_MOBILE}-err`
                );
                errorMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        if (checkInternational()) {
            if (
                /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(adminEmail).trim()
                )
            )
                document.getElementById(`${TFI_FORM_EMAIL_MOBILE}-err`).innerText = "";
            else {
                document.getElementById(`${TFI_FORM_EMAIL_MOBILE}-err`).innerText =
                    "Invalid Email Address";
                flag = false;
                document
                    .getElementById(`${TFI_FORM_EMAIL_MOBILE}-err`)
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            }
        }

        if (organisationType == "Group of Schools") {
            instituteName = nameOfGroup;
        }
        domain = domainReplacer();
        if (flag) {
            window.localStorage.setItem('leadFormSubmitted', true)
            event.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha
                    .execute("6Ld53WwaAAAAALUdYMhgWVTy4-H4512vhFq-rdng", {
                        action: "submit",
                    })
                    .then(function(token) {
                        // call to server
                        $.ajax({
                            type: "POST",
                            url: `${domain}/handle-tfi-contact-form`,
                            data: {
                                admin_name: adminName,
                                institute_name: instituteName,
                                device_type: deviceType,
                                admin_phone_number: `+${adminPhoneNumberCode}-${adminPhoneNumber}`,
                                admin_role: adminRole,
                                admin_email: adminEmail,
                                token: token,
                                utm_source: utmSource,
                                utm_medium: utmMedium,
                                utm_campaign: utmCampaign,
                                utm_content: utmContent,
                                utm_keyword: utmKeyword,
                                lead_form_url: window ? .location ? .href,
                                organisation_type: organisationType,
                                name_of_group: nameOfGroup,
                                number_of_branches: numberOfBranches,
                                school_board: schoolBoard,
                                average_fees: averageFees,
                            },
                        }).done(function(data) {});

                        event.preventDefault();

                        window ? .tfiLeadFormSubmitted(
                            "TFI_LEAD_FORM_SUBMITTED",
                            adminName,
                            instituteName,
                            adminRole,
                            adminPhoneNumberCode,
                            adminPhoneNumber,
                            utmSource,
                            utmMedium,
                            utmCampaign,
                            utmContent,
                            utmKeyword,
                            "Landing Page Modal",
                            organisationType,
                            nameOfGroup,
                            numberOfBranches,
                            schoolBoard,
                            averageFees
                        );

                        if (!preventRedirect) {
                            if (openDemoBookedModalFlag) {
                                openDemoBookedModal();
                            } else if (ROLE_TO_UTYPE_MAPPING[adminRole] == 0) {
                                if (
                                    document.getElementById(`${TFI_FORM_GROUP_OF_SCHOOLS_MOBILE}`) ?
                                    .checked
                                ) {
                                    openDemoBookedModal();
                                } else {
                                    window.location.replace(
                                        `${ssoUrl}&tm_action=redirected_login&tm_name=${adminName}&tm_ins_name=${instituteName}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                                        getAdditionalParmas()
                                    );
                                }
                            } else if (
                                ROLE_TO_UTYPE_MAPPING[adminRole] == 1 ||
                                ROLE_TO_UTYPE_MAPPING[adminRole] == 2
                            ) {
                                if (id === 1) {
                                    window.location.replace(
                                        `${domain}/login?tm_action=redirected_login&tm_name=${adminName}&utype=${ROLE_TO_UTYPE_MAPPING[adminRole]}&tm_phone_number=${adminPhoneNumber}&tm_country_code=${adminPhoneNumberCode}` +
                                        getAdditionalParmas()
                                    );
                                } else {
                                    window.location.replace(
                                        "https://www.smartschoolwave.com/homepage?" + getAdditionalParmas()
                                    );
                                }
                            } else {
                                //hide input form and start loading
                                document.getElementById(`${TFI_FORM_MOBILE}`).style.display =
                                    "none";
                                document.getElementById(
                                    `${TFI_FORM_SUCCESS_MOBILE}`
                                ).style.display = "block";
                            }
                        } else {
                            document.getElementsByClassName('modal-wrapper')[0].style.display = "none";
                            document.getElementById('get-started-modal-closed').style.visibility = "visible";
                        }
                    });
            });
        }
    }
    // Mweb form submit
    const leadformModalSubmitButton = document.getElementById(
        "tm-tfi-contact-form-submit-mobile"
    );
    if (leadformModalSubmitButton) {
        leadformModalSubmitButton.addEventListener("click", (events) => {
            mwebSubmit(events, 1, false);
        });
    }
    const leadformModalSubmitButton1 = document.getElementById(
        "tm-tfi-contact-form-submit-mobile-1"
    );
    if (leadformModalSubmitButton1) {
        leadformModalSubmitButton1.addEventListener("click", (events) => {
            mwebSubmit(events, 2, false);
        });
    }

    const teachpayLeadformModalSubmitButton = document.getElementById(
        "teachpay-contact-form-submit-mobile"
    );
    if (teachpayLeadformModalSubmitButton) {
        teachpayLeadformModalSubmitButton.addEventListener("click", (event) => {
            mwebSubmit(event, 1, false, true);
        });
    }
});

const getCountry = () => {
    const fetchCountryList = fetch(`${ACCOUNTS_API}get/country/codes`)
        .then((response) => {
            return response.json();
        })
        .then((countryList) => countryList);
    return fetchCountryList;
};

const toggleFlagList = async () => {
    let countryDropDown = document.getElementById("country-code-dropdown-mobile");
    if (!countryListDropDownClicked) {
        let countryList = await getCountry();
        countryListDropDownClicked = true;
        countryList["obj"].forEach((country) => {
            const countryDataContainer = Object.assign(
                document.createElement("div"), {
                    classList: [
                        "flex tm-bdr-b-gy-2 py-2 country-dropdown-option-mobile justify-evenly",
                    ],
                }
            );
            const countryCodeContainer = Object.assign(
                document.createElement("div"), {
                    classList: ["country-dropdown-option-code-mobile"],
                }
            );
            const countryFlagElement = Object.assign(document.createElement("img"), {
                classList: ["h-6 w-8 rounded-sm country-dropdown-option-flag-mobile"],
                src: country.flag_url,
            });

            countryCodeContainer.appendChild(
                document.createTextNode(`+${country.isd_code}`)
            );
            countryDataContainer.appendChild(countryFlagElement);
            countryDataContainer.appendChild(countryCodeContainer);
            countryDropDown.appendChild(countryDataContainer);
        });
        selectCountryOptionsModal();
    }
    countryDropDown ? .classList ? .toggle("hidden");
    flagListLock = false;
};

const toggleFlagListForm = async () => {
    let countryDropDownForm = document.getElementById(
        "country-code-dropdown-form"
    );
    if (!countryListDropDownFormClicked) {
        let countryList = await getCountry();
        countryListDropDownFormClicked = true;
        countryList["obj"].forEach((country) => {
            const countryDataContainer = Object.assign(
                document.createElement("div"), {
                    classList: [
                        "flex tm-bdr-b-gy-2 py-2 country-dropdown-option-form justify-evenly",
                    ],
                }
            );
            const countryCodeContainer = Object.assign(
                document.createElement("div"), {
                    classList: ["country-dropdown-option-code-form"],
                }
            );
            const countryFlagElement = Object.assign(document.createElement("img"), {
                classList: ["h-6 w-8 rounded-sm country-dropdown-option-flag-form"],
                src: country.flag_url,
            });

            countryCodeContainer.appendChild(
                document.createTextNode(`+${country.isd_code}`)
            );
            countryDataContainer.appendChild(countryFlagElement);
            countryDataContainer.appendChild(countryCodeContainer);
            countryDropDownForm.appendChild(countryDataContainer);
        });
        selectCountryOptionsForm();
    }
    countryDropDownForm ? .classList ? .toggle("hidden");
    flagListLockForm = false;
};

const selectCountryOptionsModal = () => {
    let options = [
        ...document.querySelectorAll(".country-dropdown-option-mobile"),
    ];
    options.forEach((option) => {
        option.addEventListener("click", () => {
            let countryISD = document ? .getElementById(
                "tm-tfi-contact-form-country-code-mobile"
            );
            let countryFlag = document ? .getElementById(
                "tm-tfi-contact-form-country-flag-mobile"
            );
            if (countryISD && countryFlag) {
                countryFlag.src = option ? .children[0].src.trim();
                countryISD.innerText = option ? .children[1].innerHTML.trim();
            }
        });
    });
};

const selectCountryOptionsForm = () => {
    let options = [...document.querySelectorAll(".country-dropdown-option-form")];
    options.forEach((option) => {
        option.addEventListener("click", () => {
            let countryISD = document ? .getElementById(
                "tm-tfi-contact-form-country-code"
            );
            let countryFlag = document ? .getElementById(
                "tm-tfi-contact-form-country-flag"
            );
            if (countryISD && countryFlag) {
                countryFlag.src = option ? .children[0].src.trim();
                countryISD.innerText = option ? .children[1].innerHTML.trim();
            }
        });
    });
};

const openModal = () => {
    let url = new URL(window.location.href);
    let getStarted = url.searchParams.get("get_started");
    if (getStarted === "true") {
        triggerFormModal();
    }
};

window.addEventListener("load", () => {
    alert(1)
    openModal();
    changeLandingPageSubTextDynamically();
});

const changeLandingPageSubTextDynamically = () => {
    const sentenceElement = document.getElementById("dynamic-sub-text");
    if (sentenceElement) {
        const words = [
            "hassle free exam management",
            "automating attendance",
            "streamlining admissions",
            "efficient lesson planning",
            "easy reports generation",
            "transparent parent communications",
            "improving learning outcomes",
            "effective performance tracking",
            "reducing overheads",
            "simplifying fee management",
        ];

        const colors = [
            "blue",
            "orange",
            "purple",
            "teal",
            "dark-blue",
            "pink",
            "light-green",
            "brown",
            "red",
            "green",
        ];

        let currentWordIndex = 0;

        const dynamicWord = words[currentWordIndex];
        const dynamicColor = colors[currentWordIndex];
        const sentence = `<span class="dynamic-word">${dynamicWord}</span>`;
        sentenceElement.innerHTML = sentence;

        currentWordIndex = (currentWordIndex + 1) % words.length;

        const colorfulWordElement = sentenceElement.querySelector(".dynamic-word");

        colorfulWordElement.classList.remove(...colors);
        colorfulWordElement.classList.add(dynamicColor);

        setInterval(() => {
            const dynamicWord = words[currentWordIndex];
            const dynamicColor = colors[currentWordIndex];
            const sentence = `<span class="dynamic-word">${dynamicWord}</span>`;
            sentenceElement.innerHTML = sentence;

            currentWordIndex = (currentWordIndex + 1) % words.length;

            const colorfulWordElement =
                sentenceElement.querySelector(".dynamic-word");

            colorfulWordElement.classList.remove(...colors);
            colorfulWordElement.classList.add(dynamicColor);
        }, 2500);
    }
};

const copyLink = () => {
    let copyLink = document.getElementById("copied-to-clipboard");
    navigator.clipboard.writeText("https://www.smartschoolwave.com");
    copyLink.style.display = "block";
    window.setTimeout(() => {
        copyLink.style.display = "none";
    }, 2000);
    window ? .tfiLeadFormlinkCopied("TFI_LEAD_FORM_LINK_COPIED");
};

const copyLinkMobile = () => {
    let copyLink = document.getElementById("copied-to-clipboard-mobile");
    navigator.clipboard.writeText("https://www.smartschoolwave.com");
    copyLink.style.display = "block";
    window.setTimeout(() => {
        copyLink.style.display = "none";
    }, 2000);
    window ? .tfiLeadFormlinkCopied("TFI_LEAD_FORM_LINK_COPIED");
};

const toggleFaqAnswers = (index) => {
    let dropdownIcon = document.getElementById("dropdown-icon-" + index);
    let faqAnswers = document.getElementById("faq-answer-" + index);
    dropdownIcon ? .classList ? .toggle("tm-feature-rotate-45");
    faqAnswers ? .classList ? .toggle("hidden");
};

const callNowButtonAndroid = document.getElementById("call-now-button-android");
if (callNowButtonAndroid) {
    callNowButtonAndroid.addEventListener("click", (events) => {
        window.callNowButtonClicked("CALL_NOW_BUTTON_CLICKED");
    });
}

var demoBookedModal = document.getElementById("demoBookedModal");
var demoBookedCloseBtn = document.getElementById("demo-booked-close-btn");

// Open demo booked modal
const openDemoBookedModal = () => {
    demoBookedModal.style.display = "flex";
    document.getElementById("inst-form-modal-id").style.display = "none";
};

if (demoBookedCloseBtn) {
    // Close demo booked modal when close clicked
    demoBookedCloseBtn.onclick = () => {
        demoBookedModal.style.display = "none";
        closeTriggerFormModal();
    };
}

const leadFormModalClosed = document.getElementById("get-started-modal-closed");
if (leadFormModalClosed) {
    leadFormModalClosed.addEventListener("click", (events) => {
        window.getStartedModalClosed("GET_STARTED_MODAL_CLOSED");
    });
}