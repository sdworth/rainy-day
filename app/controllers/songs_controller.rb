class SongsController < ApplicationController
  def create
    @song = Song.create!(song_params)

    render json: @song
  end

  def update
    @song = Song.find(params[:id])

    @song.likes = @song.likes += 1

    @song.save!

    render json: @song
  end

  private

  def song_params
    params.permit(:title, :link)
  end
end
