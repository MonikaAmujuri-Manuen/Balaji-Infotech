import { useParams } from "react-router-dom";
import { exercises, sidebarNavigation } from "../data/exercises";
import { useState } from "react";
import {
  BookOpen,Clock3,CheckCircle2,Target,Download,Play,ChevronDown,FileText,Database,FileSpreadsheet,Trophy, Circle,
  BarChart3,ListChecks, HelpCircle,
} from "lucide-react";

export default function ExerciseDetails() {
  const { exerciseSlug } = useParams();
  const [openStep, setOpenStep] = useState(0);
  
  const exercise = exercises.find(
    (item) => item.slug === exerciseSlug
  );

  if (!exercise) {
    return (
      <div className="pt-32 text-center">
        Exercise not found
      </div>
    );
  }

  const [currentQuestion, setCurrentQuestion] =
  useState(0);

const [answers, setAnswers] = useState({});

const [quizSubmitted, setQuizSubmitted] =
  useState(false);

  const quiz = exercise.quiz;

const question = quiz[currentQuestion];

  const score = quiz.reduce((total, q) => {
  return (
    total +
    (answers[q.id] === q.correctAnswer
      ? 1
      : 0)
  );
}, 0);

const [completedItems, setCompletedItems] =
  useState({});

const toggleChecklistItem = (item) => {
  setCompletedItems((prev) => ({
    ...prev,
    [item]: !prev[item],
  }));
};

const totalTasks =
  exercise.steps.length + 1;

const completedCount =
  Object.values(completedItems).filter(Boolean)
    .length;

const progress =
  (completedCount / totalTasks) * 100;

  const downloadDataset = () => {
  const rows =
    exercise.practiceDataset.entries;

  const csv = [
    ["Ledger", "Group", "Opening Balance"],
    ...rows.map((row) => [
      row.ledger,
      row.group,
      row.balance,
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv",
  });

  const url =
    window.URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download =
    "opening-balance-dataset.csv";

  a.click();
};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">

      {/* ================= HERO ================= */}
<section
  className="
  relative
  overflow-hidden
    bg-[#F8FBFD]
    border
    border-slate-200
    rounded-2xl
sm:rounded-3xl
p-5
sm:p-8
md:p-10
    shadow-sm
    mb-10
  "
>

  <div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[600px]
    h-[600px]
    bg-[#155A96]/5
    blur-[120px]
    rounded-full
  "
/>

  <div className="grid lg:grid-cols-1 gap-10 items-center">

    {/*  Content */}
    <div
  className="relative
    max-w-4xl
    mx-auto
    text-center
  "
>
      <div
        className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-[#EEF4F8]
          text-[#155A96]
          text-sm
          font-medium
        "
      >
        <BookOpen size={15} />
        Practice Lab
      </div>

      <h1
        className="
          mt-4
          text-2xl
sm:text-3xl
md:text-4xl
lg:text-5xl
          font-bold
          text-slate-900
          leading-tight
        "
      >
        {exercise.title}
      </h1>

      <p
        className="
          mt-4
          text-sm
sm:text-base
md:text-lg
          text-slate-600
          max-w-3xl
          mx-auto
          leading-relaxed
        "
      >
        {exercise.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

        <div
  className="
    bg-white
    border border-[#D7E5EF]
    rounded-2xl
    p-5
    text-center
  "
>
  <Target
    size={18}
    className="mx-auto text-[#155A96]"
  />

  <p className="mt-2 text-xs uppercase tracking-wider text-[#64748B]">
    Level
  </p>

  <h3 className="mt-1 font-bold text-[#155A96]">
    {exercise.level}
  </h3>
</div>

        <div
  className="
    bg-white
    border border-[#D7E5EF]
    rounded-2xl
    p-5
    text-center
  "
>
  <Clock3
    size={18}
    className="mx-auto text-[#155A96]"
  />

  <p className="mt-2 text-xs uppercase tracking-wider text-[#64748B]">
    Duration
  </p>

  <h3 className="mt-1 font-bold text-[#155A96]">
    {exercise.duration}
  </h3>
</div>

        <div
  className="
    bg-white
    border border-[#D7E5EF]
    rounded-2xl
    p-5
    text-center
  "
>
  <CheckCircle2
    size={18}
    className="mx-auto text-[#155A96]"
  />

  <p className="mt-2 text-xs uppercase tracking-wider text-[#64748B]">
    Steps
  </p>

  <h3 className="mt-1 font-bold text-[#155A96]">
    {exercise.steps?.length || 0}
  </h3>
</div>

      </div>

      <div
  className="
    mt-6
    bg-white
    border border-[#D7E5EF]
    rounded-2xl
    p-5
    max-w-xl
    mx-auto
  "
>
  <div className="flex justify-between items-center mb-2">
  <span className="text-sm text-[#64748B]">
    Lab Completion
  </span>

  <span className="text-sm font-semibold text-[#155A96]">
    {completedCount}/{exercise.steps.length}
  </span>
</div>

  <div className="h-2 bg-[#EEF4F8] rounded-full">
    <div
  className="
    h-2
    bg-[#155A96]
    rounded-full
    transition-all
    duration-500
  "
  style={{
    width: `${
      (completedCount/ exercise.steps.length) * 100
    }%`,
  }}
/>
</div>
</div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">

        <button
          onClick={() =>
            document
              .getElementById("steps")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-[#155A96]
            hover:bg-[#155A96]/80
            text-white
            font-medium
          "
        >
          <Play size={18} />
          Start Lab
        </button>

      </div>
    </div>

  </div>
</section>

      {/* ================= CONTENT ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* MAIN CONTENT */}

        <div className="lg:col-span-8 space-y-8">

          {/* Exercise Brief */}

          <section
  id="learn"
  className="
    bg-white
    border
    border-slate-200
    rounded-2xl
    lg:rounded-3xl
    p-4
    sm:p-6
    lg:p-8
  "
>
  
  <div className="flex items-center gap-3 mb-6">
  <div
    className="
      w-10 h-10
      rounded-xl
      bg-[#EEF4F8]
      flex items-center justify-center
    "
  >
    <BookOpen className="w-5 h-5 text-[#155A96]" />
  </div>

  <div
  className="
    absolute
    top-0
    left-0
    w-full
    h-1
    bg-[#155A96]
    rounded-t-3xl
  "
/>

  <h2
    className="
      text-xl
      sm:text-2xl
      font-bold
      text-[#071426]
    "
  >
    What You'll Learn
  </h2>
  
</div>
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-3
      sm:gap-4
      md:gap-6
    "
  >
    {exercise.checklist.map((item) => (
      <div
        key={item}
        className="
flex
items-start
gap-3
rounded-2xl
border border-[#D7E5EF]
bg-white
p-4
transition-all
duration-300
hover:border-[#155A96]/30
hover:shadow-md
"
      >
        <div
  className="
    w-8 h-8
    rounded-full
    bg-[#EEF4F8]
    flex items-center justify-center
    shrink-0
    mt-0.5
  "
>
  <CheckCircle2
    size={16}
    className="text-[#155A96]"
  />
</div>

        <span
          className="
            text-sm
            sm:text-base
            text-slate-700
            leading-6
          "
        >
          {item}
        </span>
      </div>
    ))}
  </div>
</section>

          {/* Lab Steps */}

          <section
  id="steps"
  className="scroll-mt-32
    bg-[#F5F7FF]
    border
    border-slate-200
    rounded-2xl
lg:rounded-3xl
p-5
sm:p-6
lg:p-8
  "
>
  <div className="flex items-center justify-between mb-8">
    <div>
  <p className="text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]">
    Practice Workflow
  </p>

  <h2 className="text-2xl font-bold text-[#071426] mt-1">
    Lab Steps
  </h2>
</div>

    <span
      className="
        px-3
        py-1
        rounded-full
        bg-[#EEF4F8]
text-[#155A96]
        text-sm
        font-medium
      "
    >
      {exercise.steps.length} Steps
    </span>
  </div>

  <div className="space-y-4">
    {exercise.steps.map((step, index) => {
      const isOpen = openStep === index;

      return (
        <div
          key={step.id}
          className={`
  border
  rounded-2xl
  overflow-hidden
  transition-all duration-300

  ${
    isOpen
      ? "border-[#155A96] shadow-lg"
      : "border-slate-200"
  }
`}
        >
          {/* Header */}

          <button
            onClick={() =>
              setOpenStep(
                isOpen ? null : index
              )
            }
            className="
              w-full
              flex
              items-center
              justify-between
              p-5
              text-left
              hover:bg-slate-50
              transition
            "
          >
            <div className="flex items-center gap-4">

              {/* Step Number */}

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-blue-100
                  text-[#155A96]
                  flex
                  items-center
                  justify-center
                  font-bold
                  shrink-0
                "
              >
                {step.id}
              </div>

              <div className="hidden sm:block w-6 h-[2px] bg-[#D7E5EF]" />

              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-slate-900
                  "
                >
                  {step.title}
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-1
                    text-sm
                    text-[#64748B]
                  "
                >
                  <Clock3 size={14} />
                  {step.duration}
                </div>
              </div>

            </div>

            <ChevronDown
              size={20}
              className={`
                transition-transform
                duration-300
                ${
                  isOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {/* Expanded Content */}

          {isOpen && (
            <div
              className="
                border-t
                border-slate-100
                p-6
                bg-[#FAFCFE]
              "
            >
              {/* Objective */}

              <div className="mb-6">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-2
                  "
                >
                  <Target
                    size={18}
                    className="text-[#155A96]"
                  />

                  <h4 className="font-semibold">
                    Objective
                  </h4>
                </div>

                <p className="text-slate-600">
                  {step.objective}
                </p>
              </div>

              {/* Instructions */}

              <div className="mb-6">
                <h4
                  className="
                    font-semibold
                    mb-3
                  "
                >
                  Instructions
                </h4>

                <ul className="space-y-3">
                  {step.instructions.map(
                    (
                      instruction,
                      instructionIndex
                    ) => (
                      <li
                        key={instructionIndex}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <div
                          className="
                            w-6
                            h-6
                            rounded-full
                            bg-[#EEF4F8]
text-[#155A96]
                            text-xs
                            flex
                            items-center
                            justify-center
                            font-medium
                            shrink-0
                            mt-0.5
                          "
                        >
                          {instructionIndex + 1}
                        </div>

                        <span className="text-slate-700">
                          {instruction}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Expected Result */}

              <div
                className="
                  rounded-2xl
                  bg-[#EEF4F8]
                  border
                  border-[#D7E5EF]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-2
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="
                      text-[#155A96]
                    "
                  />

                  <h4
                    className="
                      font-semibold
                      text-[#155A96]
                    "
                  >
                    Expected Result
                  </h4>
                </div>

                <p
                  className="
                    text-[#475569]
                  "
                >
                  {step.expectedResult}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
          </section>

          <section id="dataset"
  className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-8
  "
>
  <div className="flex items-center justify-between mb-6">
    <div>
      <div>
  <p className="text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]">
    Practice Resources
  </p>

  <h2 className="text-2xl font-bold text-[#071426] mt-1">
    Practice Dataset
  </h2>
</div>


      <p className="text-slate-500 mt-2">
        Use these values while completing
        the lab exercise.
      </p>
    </div>

    <div
      className="
        hidden
        md:flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#EEF4F8]
text-[#155A96]
border border-[#D7E5EF]
      "
    >
      <Database size={16} />
      Sample Data

      <button onClick={downloadDataset}
      className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-white
border border-[#D7E5EF]
text-[#155A96]
font-medium
hover:bg-[#F8FBFD]
transition-all
">
      <FileSpreadsheet size={16} />
      Download
    </button>
    </div>
  </div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">

  <div className="bg-[#F8FBFD] border border-[#D7E5EF] rounded-xl p-4">
    <p className="text-xs text-[#64748B]">Records</p>
    <p className="text-xl font-bold text-[#071426]">
      {exercise.practiceDataset.entries.length}
    </p>
  </div>

  <div className="bg-[#F8FBFD] border border-[#D7E5EF] rounded-xl p-4">
    <p className="text-xs text-[#64748B]">Fields</p>
    <p className="text-xl font-bold text-[#071426]">
      {exercise.practiceDataset.columns.length}
    </p>
  </div>

</div>
  <div
  className="
    overflow-x-auto
    rounded-2xl
    border
    border-slate-200
  "
>
  <table className="min-w-[650px] w-full">

    <thead>
      <tr className="bg-[#F8FBFD]">
        {exercise.practiceDataset.columns.map((column) => (
          <th
  key={column}
  className="
    text-left
    px-6
    py-4
    text-[#155A96]
    font-semibold
    uppercase
    text-sm
    tracking-wide
  "
>
            {column}
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {exercise.practiceDataset.entries.map((row, index) => (
        <tr
  key={index}
  className="
    border-t
    border-slate-100
    hover:bg-[#F8FBFD]
    transition-colors
  "
>
          {Object.values(row).map((value, i) => (
            <td
              key={i}
              className="px-6 py-4"
            >
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>

  </table>
</div>

  <div
    className="
      mt-6
      rounded-2xl
      bg-[#EEF4F8]
      border
      border-[#D7E5EF]
      p-4
    "
  >
    <p className="text-[#155A96] text-sm">
      {exercise.practiceDataset.note}
    </p>
  </div>
          </section>

          {/* Quiz */}

          <section id="quiz"
  className="
    bg-[#F5F7FF]
    border
    border-slate-200
    rounded-3xl
    p-8
  "
>
  {!quizSubmitted ? (
    <>
      {/* Header */}

      <div className="mb-8">
        <div>
  <p className="text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]">
    Knowledge Check
  </p>

  <h2
    className="
      text-2xl
      font-bold
      text-[#071426]
      mt-1
    "
  >
    Assessment Quiz
  </h2>
</div>

        <p className="text-slate-500 mt-2">
          Complete the assessment to
          validate your learning.
        </p>
      </div>

      {/* Progress */}

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-slate-500">
            Question {currentQuestion + 1} of{" "}
            {quiz.length}
          </span>

          <span className="text-sm text-slate-500">
            {Math.round(
              ((currentQuestion + 1) /
                quiz.length) *
                100
            )}
            %
          </span>
        </div>

        <div className="h-2 bg-[#EEF4F8] rounded-full">
          <div
            className="
              h-2
              bg-[#155A96]
              rounded-full
              transition-all
            "
            style={{
              width: `${
                ((currentQuestion + 1) /
                  quiz.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Question */}

      <div className="mb-8">
        <h3
          className="
            text-xl
            font-semibold
            text-slate-900
            mb-6
          "
        >
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map(
            (option) => (
              <button
                key={option}
                onClick={() =>
                  setAnswers({
                    ...answers,
                    [question.id]:
                      option,
                  })
                }
                className={`
  w-full
  text-left
  p-4
  rounded-2xl
  border
  transition-all
  duration-300


                  ${
                    answers[
                      question.id
                    ] === option
                      ? "border-[#155A96] bg-[#EEF4F8]"
                      : "border-slate-200 hover:border-[#155A96]/40"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  
                  <div
                    className={`
                      w-5
                      h-5
                      rounded-full
                      border-2

                      ${
                        answers[
                          question.id
                        ] === option
                          ? "border-[#155A96] bg-[#155A96]"
                          : "border-slate-300"
                      }
                    `}
                  />

                  <span>
                    {option}
                  </span>
                </div>
              </button>
            )
          )}
        </div>
      </div>

      {/* Footer */}

      <div className="flex justify-between">
        <button
          onClick={() =>
            setCurrentQuestion(
              currentQuestion - 1
            )
          }
          disabled={
            currentQuestion === 0
          }
          className="
            px-5
            py-3
            rounded-xl
            border
            border-[#D7E5EF]
text-[#475569]
            disabled:opacity-50
          "
        >
          Previous
        </button>

        {currentQuestion <
        quiz.length - 1 ? (
          <button
            onClick={() =>
              setCurrentQuestion(
                currentQuestion + 1
              )
            }
            className="
              px-5
              py-3
              rounded-xl
              bg-[#155A96]
hover:bg-[#0F4D82]
              text-white
            "
          >
            Next
          </button>
        ) : (
          <button
            onClick={() =>
              setQuizSubmitted(true)
            }
            className="
              px-5
              py-3
              rounded-xl
              bg-[#155A96]
hover:bg-[#0F4D82]
              text-white
            "
          >
            Submit Quiz
          </button>
        )}
      </div>
    </>
  ) : (
    /* Result Screen */
    <div className="text-center">

      <div
        className="
          w-20
          h-20
          rounded-full
          bg-[#EEF4F8]
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >
        <Trophy
          size={36}
          className="text-[#155A96]"
        />
      </div>

      <h2
        className="
          text-3xl
          font-bold
          text-slate-900
        "
      >
        Quiz Completed
      </h2>

      <p
        className="
          text-slate-500
          mt-3
          mb-8
        "
      >
        Assessment submitted
        successfully.
      </p>

      <div
        className="
          inline-flex
          items-center
          gap-3
          px-6
          py-4
          rounded-2xl
          bg-[#EEF4F8]

          border
          border-[#D7E5EF]
        "
      >
        <CheckCircle2
          className="text-green-600"
        />

        <span
          className="
            text-lg
            font-semibold
            text-[#155A96]
          "
        >
          Score: {score} /{" "}
          {quiz.length}
        </span>
        <p className="mt-3 text-[#64748B]">
  {Math.round((score / quiz.length) * 100)}% Accuracy
</p>
      </div>

      <p className="mt-6 text-slate-600">
        You have completed the
        assessment for this lab.
      </p>
    </div>
  )}
          </section>

        </div>

        {/* SIDEBAR */}

        <aside className="hidden lg:block lg:col-span-4">
  <div className="sticky top-28 space-y-6">

    {/* Progress */}

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
      "
    >
      <h3 className="
font-semibold
text-[#071426]
 mb-4">
        Progress
      </h3>

      <div
        className="
          h-3
          bg-[#EEF4F8]
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            bg-[#155A96]
            transition-all
            duration-500
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-sm text-slate-500">
          {completedCount} of {totalTasks} completed
        </span>

        <span
          className="
            text-sm
            font-medium
            text-[#155A96]
          " 
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>

    {/* Checklist */}

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-6
      "
    >
      <h3 className="
font-semibold
text-[#071426]
 mb-4">
        Lab Checklist
      </h3>

      <div className="space-y-4">

        {exercise.steps.map((step) => (
          <button
            key={step.id}
            onClick={() =>
              toggleChecklistItem(step.title)
            }
            className="
              w-full
              flex
              items-center
              gap-3
              text-left
            "
          >
            {completedItems[step.title] ? (
              <CheckCircle2
                size={18}
                className="text-[#155A96]"
              />
            ) : (
              <Circle
                size={18}
                className="text-slate-300"
              />
            )}

            <span className="text-sm">
              {step.title}
            </span>
          </button>
        ))}

        {/* Quiz */}

        <button
          onClick={() =>
            toggleChecklistItem(
              "Quiz Completed"
            )
          }
          className="
            w-full
            flex
            items-center
            gap-3
            text-left
          "
        >
          {completedItems[
            "Quiz Completed"
          ] ? (
            <CheckCircle2
              size={18}
              className="text-green-500"
            />
          ) : (
            <Circle
              size={18}
              className="text-slate-300"
            />
          )}

          <span className="text-sm">
            Quiz Completed
          </span>
        </button>

      </div>
    </div>

    {/* Quick Navigation */}

    <div
      className="
        bg-[#F8FBFD]
        border
        border-slate-200
        rounded-3xl
        p-6
      "
    >
      <h3 className="
font-semibold
text-[#071426]
 mb-4">
        Quick Navigation
      </h3>

      <div className="space-y-3">
      {sidebarNavigation.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="
            block
            text-sm
            text-slate-600
            hover:text-[#155A96]
            transition
          "
        >
          {item.label}
        </a>
      ))}

      </div>
    </div>

    <div
  className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-6
  "
>
  <h3 className="
font-semibold
text-[#071426]
 mb-4">
    Lab Details
  </h3>

  <div className="space-y-4">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BarChart3
          size={16}
          className="text-[#155A96]"
        />
        <span className="text-slate-600">
          Level
        </span>
      </div>

      <span className="font-medium">
        {exercise.level}
      </span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Clock3
          size={16}
          className="text-[#155A96]"
        />
        <span className="text-slate-600">
          Duration
        </span>
      </div>

      <span className="font-medium">
        {exercise.duration}
      </span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ListChecks
          size={16}
          className="text-[#155A96]"
        />
        <span className="text-slate-600">
          Steps
        </span>
      </div>

      <span className="font-medium">
        {exercise.steps.length}
      </span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HelpCircle
          size={16}
          className="text-[#155A96]"
        />
        <span className="text-slate-600">
          Quiz
        </span>
      </div>

      <span className="font-medium">
        {exercise.quiz.length}
      </span>
    </div>

  </div>
</div>

    {/* Resources */}

    <div
  className="
    bg-white
    border
    border-slate-200
    rounded-3xl
    p-6
  "
>
  <h3 className="font-semibold mb-4">
    Quick Tips
  </h3>

  <div className="space-y-3 text-sm">

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-[#155A96] mt-0.5"
      />
      Use a demo company while practicing.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-[#155A96] mt-0.5"
      />
      Complete every lab step in sequence.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-[#155A96] mt-0.5"
      />
      Review the dataset before submitting.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-[#155A96] mt-0.5"
      />
      Finish the assessment to complete the lab.
    </div>

  </div>
</div>

  </div>
        </aside>

      </div>
    </div>
  );
}