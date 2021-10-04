import SampleTemplate from "../components/templates/SampleTemplate";

export const templates = [
  {
    id: 1,
    name: "Sample Template",
    unique_id: "sample-template",
    component: SampleTemplate,
    data: {
      name: "",
      profession: "",
      profile: {
        headline: "Profile",
        details: ""
      },
      personal_details: {
        headline: "Personal Details",
        dob: {
          headline: "Birth date",
          value: ""
        },
        nationality: {
          headline: "Nationality",
          value: ""
        },
        address: {
          headline: "Address",
          value: ""
        },
        martial_status: {
          headline: "Marital status",
          value: ""
        }
      },
      contact: {
        headline: "Contact",
        phone: "",
        email: "",
        website: "",
        linkedin: "",
        facebook: "",
        github: ""
      },
      work_experiences: {
        headline: "WORK EXPERIENCE",
        items: [
          {
            _id: "",
            position: "",
            employer: "",
            from_until: "",
            details: ""
          }
        ]
      },
      educations: {
        headline: "EDUCATION",
        items: [
          {
            _id: "",
            degree: "",
            school: "",
            from_until: "",
          }
        ]
      },
      simple1: {
        headline: "",
        items: [
          {
            _id: "",
            skill: ""
          }
        ]
      },
      simple2: {
        headline: "",
        items: [
          {
            _id: "",
            skill: ""
          }
        ]
      },
      circular_skills: {
        headline: "",
        items: [
          {
            _id: "",
            skill: "",
            percent: 25
          }
        ]
      },
      bar_skills: {
        headline: "",
        items: [
          {
            _id: "",
            skill: "",
            percent: 75
          }
        ]
      },
      list1: {
        headline: "",
        items: [
          {
            _id: "",
            text: "",
          }
        ]
      },
      list2: {
        headline: "",
        items: [
          {
            _id: "",
            text: "",
          }
        ]
      },
    },
    settings: {},
  }
];