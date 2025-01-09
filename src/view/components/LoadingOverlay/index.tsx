import { CircularProgress } from "@mui/material";
import React from "react";
import { useLoading } from "../../../app/context/loadingContext";
import "./styles.css";
const LoadingOverlay: React.FC = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed h-sreen flex items-center justify-center inset-0 bg-black bg-opacity-50 z-[9999]  ">
      <div className="flutuacao flex justify-center flex-col">
        <CircularProgress />
        <p className="fixed left-1/2 bottom-0 text-white text-xl transform -translate-x-1/2">
          Carregando
          <span className="animate-pulse">.</span>
          <span className="animate-pulse delay-200">.</span>
          <span className="animate-pulse delay-400">.</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
