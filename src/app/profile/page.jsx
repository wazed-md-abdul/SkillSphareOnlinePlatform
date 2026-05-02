"use client";
import React from 'react';
import { CiEdit } from "react-icons/ci";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';

const UserCard = () => {
  const userData = authClient.useSession();

  const onsubmit = async (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    await authClient.updateUser(userData);
  }


  const user = userData?.data?.user;
  return (
    <div className="bg-white border border-surface-container-high rounded-2xl p-8 flex flex-col items-center max-w-sm container mx-auto mt-6 shadow-2xl">
      {/* Profile Image */}
      <div className="relative mb-6">
        <img
          alt={user?.name || 'Profile Image'}
          className="w-28 h-28 rounded-full object-cover border-4 border-surface-container-low"
          src={user?.image || 'https://via.placeholder.com/150'}
        />
        <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white">
          <span className="material-symbols-outlined !text-[12px] fill-icon">person</span>
        </div>
      </div>

      {/* User Identity */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-on-surface mb-1">{user?.name || 'John Doe'}</h2>
        <p className="text-secondary text-sm">Free Member</p>
      </div>

      {/* User Stats */}
      <div className="w-full flex justify-around py-4 border-y border-surface-container-low mb-6">
        <div className="text-center">
          <p className="text-lg font-bold text-on-surface">12</p>
          <p className="text-[10px] uppercase tracking-wider text-outline">Courses</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-on-surface">48</p>
          <p className="text-[10px] uppercase tracking-wider text-outline">Hours Learnt</p>
        </div>
      </div>

      {/* Call to Action */}

      <Modal>
        <Button className="bg-on-surface text-tertiary-fixed font-headline px-8 py-4 rounded-full font-bold text-lg shadow-[0px_20px_40px_rgba(25,28,29,0.15)] hover:shadow-none transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer">
          <CiEdit /> Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <img src={user?.image}
                    alt={user?.name}
                    className="w-12 h-12 rounded-full object-cover relative z-10 border-4 border-white shadow-sm"
                  />
                </Modal.Icon>
                <Modal.Heading>{user?.name || 'John Doe'}</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Edit your profile information and preferences here.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="text">
                      <Label>Image URL</Label>
                      <Input placeholder="Enter the URL of your profile image" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant='danger'>
                        Cancel
                      </Button>
                      <Button slot="close" type="submit" className="bg-on-surface text-tertiary-fixed font-headline px-8 py-4 rounded-full font-bold text-sm shadow-[0px_20px_40px_rgba(25,28,29,0.15)] hover:shadow-none transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer">Update Profile</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UserCard;
