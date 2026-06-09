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
    bg-[#F5F7FF]
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

  <div className="grid lg:grid-cols-1 gap-10 items-center">

    {/*  Content */}
    <div
  className="
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
          bg-blue-50
          text-blue-700
          text-sm
          font-medium
        "
      >
        <BookOpen size={15} />
        Practice Lab
      </div>

      <h1
        className="
          mt-6
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
          mt-6
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
      <div className="flex flex-wrap justify-center gap-3 mt-8">

        <div
          className="
            flex
            items-center
            gap-2
            px-3 py-1.5
text-sm
            bg-blue-50
            text-blue-700
            rounded-full
            font-medium
          "
        >
          <Target size={16} />
          {exercise.level}
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            bg-slate-50
            rounded-full
            text-slate-700
          "
        >
          <Clock3 size={16} />
          {exercise.duration}
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            bg-slate-50
            rounded-full
            text-slate-700
          "
        >
          <CheckCircle2 size={16} />
          {exercise.steps?.length || 0} Steps
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">

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
            bg-[#2F80FF]
            hover:bg-[#246AE8]
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
  
  <h2
    className="
      text-xl
      sm:text-2xl
      font-bold
      mb-4
      sm:mb-5
    "
  >
    <BookOpen className="w-5 h-5 text-[#2563EB]" />
What You'll Learn
  </h2>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-3
      sm:gap-4
      md:gap-8
    "
  >
    {exercise.checklist.map((item) => (
      <div
        key={item}
        className="
          flex
          items-start
          gap-3
        "
      >
        <CheckCircle2
          size={16}
          className="
            text-blue-600
            mt-1
            shrink-0
          "
        />

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

          <section id="steps"
  className="
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
    <h2 className="text-2xl font-bold text-slate-900">
      Lab Steps
    </h2>

    <span
      className="
        px-3
        py-1
        rounded-full
        bg-blue-50
        text-blue-700
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
          className="
            border
            border-slate-200
            rounded-2xl
            overflow-hidden
            transition-all
          "
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
                  text-blue-700
                  flex
                  items-center
                  justify-center
                  font-bold
                  shrink-0
                "
              >
                {step.id}
              </div>

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
                    text-slate-500
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
                bg-slate-50/50
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
                    className="text-blue-600"
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
                            bg-blue-100
                            text-blue-700
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
                  bg-green-50
                  border
                  border-green-100
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
                      text-green-600
                    "
                  />

                  <h4
                    className="
                      font-semibold
                      text-green-800
                    "
                  >
                    Expected Result
                  </h4>
                </div>

                <p
                  className="
                    text-green-700
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
      <h2 className="text-2xl font-bold">
        Practice Dataset
      </h2>


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
        bg-blue-50
        text-blue-700
      "
    >
      <Database size={16} />
      Sample Data

      <button onClick={downloadDataset}
      className="
        flex
        items-center
        gap-2
        px-4 py-2
      "
    >
      <FileSpreadsheet size={16} />
      Download
    </button>
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
      <tr className="bg-slate-50">
        {exercise.practiceDataset.columns.map((column) => (
          <th
            key={column}
            className="text-left px-6 py-4"
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
          className="border-t border-slate-100"
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
      bg-blue-50
      border
      border-blue-100
      p-4
    "
  >
    <p className="text-blue-800 text-sm">
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
        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
          "
        >
          Assessment Quiz
        </h2>

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

        <div className="h-2 bg-slate-100 rounded-full">
          <div
            className="
              h-2
              bg-blue-600
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
                  rounded-xl
                  border
                  transition

                  ${
                    answers[
                      question.id
                    ] === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300"
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
                          ? "border-blue-600 bg-blue-600"
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
            border-slate-300
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
              bg-blue-600
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
              bg-green-600
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
          bg-green-50
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >
        <Trophy
          size={36}
          className="text-green-600"
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
          bg-green-50
          border
          border-green-100
        "
      >
        <CheckCircle2
          className="text-green-600"
        />

        <span
          className="
            text-lg
            font-semibold
            text-green-700
          "
        >
          Score: {score} /{" "}
          {quiz.length}
        </span>
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
      <h3 className="font-semibold mb-4">
        Progress
      </h3>

      <div
        className="
          h-3
          bg-slate-100
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            bg-blue-600
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
            text-blue-600
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
      <h3 className="font-semibold mb-5">
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
                className="text-green-500"
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
        bg-[#F5F7FF]
        border
        border-slate-200
        rounded-3xl
        p-6
      "
    >
      <h3 className="font-semibold mb-5">
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
            hover:text-blue-600
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
  <h3 className="font-semibold mb-5">
    Lab Details
  </h3>

  <div className="space-y-4">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BarChart3
          size={16}
          className="text-blue-600"
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
          className="text-blue-600"
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
          className="text-blue-600"
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
          className="text-blue-600"
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
        className="text-green-500 mt-0.5"
      />
      Use a demo company while practicing.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-green-500 mt-0.5"
      />
      Save changes after each step.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-green-500 mt-0.5"
      />
      Verify balances before continuing.
    </div>

    <div className="flex gap-2">
      <CheckCircle2
        size={16}
        className="text-green-500 mt-0.5"
      />
      Complete the quiz to finish the lab.
    </div>

  </div>
</div>

  </div>
        </aside>

      </div>
    </div>
  );
}