import TaskAdd from "@/components/TaskAdd";
import Br from "@/components/ui/Br";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section className={`section bg-repeat bg-contain`}>
        <div className="wraper items-center py-40 justify-center px-5">
          <div className="space-y-5 flex flex-col items-center">
            <div className="text-center gap-3 flex flex-col items-center">
              <h1 className="text-3xl leading-7 md:leading-10 sm:text-4xl md:text-5xl capitalize font-semibold">
                Task Flow: Simplifying Task Management <br /> for Enhanced
                Productivity
              </h1>
              <p className="text-sm md:text-base font-light dark:text-white/70">
                Task Flow is a task management web app designed to help users
                organize, prioritize, and track tasks <br /> seamlessly,
                enhancing productivity and collaboration.
              </p>
            </div>
            <TaskAdd />
          </div>
        </div>
      </section>
    </>
  );
}
