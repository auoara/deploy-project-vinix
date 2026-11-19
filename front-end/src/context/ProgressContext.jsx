import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiClient } from '../api/client';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [summary, setSummary] = useState({
    totalCourses: 10,
    passedCount: 0,
    percentage: 0,
    averageScore: 0,
    totalAttempts: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    try {
      setLoading(true);
      const [coursesData, summaryData] = await Promise.all([
        apiClient.getCourses(),
        apiClient.getUserProgress()
      ]);
      setCourses(coursesData);
      setSummary(summaryData);
    } catch (err) {
      console.error('Failed to load progress data', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Reset seluruh progres belajar & riwayat ujian ke kondisi awal (Modul 1 unlocked, 2-10 locked, 0%)
  const resetProgress = async () => {
    await apiClient.resetUserProgress();
    await fetchProgress();
  };

  // Membuka semua gembok modul yang masih terkunci untuk mode demo
  const unlockAllForDemo = async () => {
    await apiClient.unlockAllCourses();
    await fetchProgress();
  };

  return (
    <ProgressContext.Provider value={{
      courses,
      summary,
      loading,
      refreshProgress: fetchProgress,
      resetProgress,
      unlockAllForDemo
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}