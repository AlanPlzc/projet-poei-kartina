package com.ajc.kartina.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ajc.kartina.model.Artiste;

@Repository
public interface ArtisteRepository extends JpaRepository<Artiste, Integer> {
	

}
