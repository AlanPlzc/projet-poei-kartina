package com.ajc.kartina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ajc.kartina.model.Address;

@Repository
public interface EnteteCommandeRepository extends JpaRepository<Address, Integer> {

}
