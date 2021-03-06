package com.ajc.kartina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ajc.kartina.model.Theme;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Integer> {

}
