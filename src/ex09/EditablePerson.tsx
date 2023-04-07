import React, { useState, useMemo } from "react";
import { PersonCard } from "../solution/PersonCard";

import { PersonForm } from "./PersonForm";
import { Route, Routes, useNavigate } from "react-router-dom";

type PersonProps = {
  person?: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  const navigate = useNavigate();
  const actions = useMemo(
    () => [{ label: "edit", onClick: () => navigate("edit") }],
    []
  );
  const resetForm = () => navigate("");

  return (
    <main>
      <Routes>
        <Route
          path="*"
          element={<PersonCard person={person} actions={actions} />}
        />
        <Route
          path="edit"
          element={<PersonForm person={person} onReset={resetForm} />}
        />
      </Routes>
    </main>
  );
};
