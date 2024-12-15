import * as z from "zod";

export const registerComponentsSchema = z.object({
  issueDate: z.date(),
  enrollmentDate: z.date(),
  transitAuthority: z.string()
});


export const registerComponentsInputs = () =>[
  {
    id: "issueDate",
    label: "labels.issue_date",
    name: "issue_date",
    type: "date",
  },
  {
    id: "enrollmentDate",
    label: "labels.enrollment_date",
    name: "enrollment_date",
    type: "date",
  },
  {
    id: "transitAuthority",
    label: "labels.transit_authority",
    name: "transit_authority",
    type: "date",
  },
]